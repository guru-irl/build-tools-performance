import React from 'react';
const LABEL_45960 = 'component_45960';
export function Component45960({ value = 45960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45960, 'data-value': derived.doubled }, children);
}
export default Component45960;
