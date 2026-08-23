import React from 'react';
const LABEL_8922 = 'component_8922';
export function Component8922({ value = 8922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8922, 'data-value': derived.doubled }, children);
}
export default Component8922;
