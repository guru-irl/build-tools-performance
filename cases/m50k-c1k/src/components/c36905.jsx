import React from 'react';
const LABEL_36905 = 'component_36905';
export function Component36905({ value = 36905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36905, 'data-value': derived.doubled }, children);
}
export default Component36905;
