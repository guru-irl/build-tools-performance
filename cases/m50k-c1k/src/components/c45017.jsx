import React from 'react';
const LABEL_45017 = 'component_45017';
export function Component45017({ value = 45017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45017, 'data-value': derived.doubled }, children);
}
export default Component45017;
