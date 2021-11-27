# -*- coding: utf-8 -*-

from odoo import api, fields, models, _
from odoo.exceptions import ValidationError, AccessError, UserError


class GeeksGeeks(models.Model):
    _name = "geeks.geeks"

    name = fields.Char(string='Geeks Group')
    subject = fields.Char(string="Subject")
    Note = fields.Html('Note')

    partner_id = fields.Many2one('res.partner', string='Partners')

    progress = fields.Float("Progress abd Hakim", help="Display progress of current task.", compute='_compute_progress')

    progressbar = fields.Float("Progress Bar", help="Display progress Bar of current task.")

    color = fields.Integer()


    @api.depends('progressbar')
    def _compute_progress(self):
        for record in self:
            record.progress = record.progressbar



