import React from 'react';
const LABEL_45776 = 'component_45776';
export function Component45776({ value = 45776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45776, 'data-value': derived.doubled }, children);
}
export default Component45776;
