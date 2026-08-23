import React from 'react';
const LABEL_42922 = 'component_42922';
export function Component42922({ value = 42922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42922, 'data-value': derived.doubled }, children);
}
export default Component42922;
