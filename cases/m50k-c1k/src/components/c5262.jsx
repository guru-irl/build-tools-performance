import React from 'react';
const LABEL_5262 = 'component_5262';
export function Component5262({ value = 5262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5262, 'data-value': derived.doubled }, children);
}
export default Component5262;
