import React from 'react';
const LABEL_8905 = 'component_8905';
export function Component8905({ value = 8905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8905, 'data-value': derived.doubled }, children);
}
export default Component8905;
