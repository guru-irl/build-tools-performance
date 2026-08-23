import React from 'react';
const LABEL_1776 = 'component_1776';
export function Component1776({ value = 1776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1776, 'data-value': derived.doubled }, children);
}
export default Component1776;
