import React from 'react';
const LABEL_13194 = 'component_13194';
export function Component13194({ value = 13194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13194, 'data-value': derived.doubled }, children);
}
export default Component13194;
