import React from 'react';
const LABEL_45408 = 'component_45408';
export function Component45408({ value = 45408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45408, 'data-value': derived.doubled }, children);
}
export default Component45408;
