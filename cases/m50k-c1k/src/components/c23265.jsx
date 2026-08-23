import React from 'react';
const LABEL_23265 = 'component_23265';
export function Component23265({ value = 23265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23265, 'data-value': derived.doubled }, children);
}
export default Component23265;
