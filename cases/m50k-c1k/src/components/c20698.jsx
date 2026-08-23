import React from 'react';
const LABEL_20698 = 'component_20698';
export function Component20698({ value = 20698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20698, 'data-value': derived.doubled }, children);
}
export default Component20698;
