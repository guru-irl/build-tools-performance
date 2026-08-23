import React from 'react';
const LABEL_35960 = 'component_35960';
export function Component35960({ value = 35960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35960, 'data-value': derived.doubled }, children);
}
export default Component35960;
