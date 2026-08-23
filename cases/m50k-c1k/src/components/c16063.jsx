import React from 'react';
const LABEL_16063 = 'component_16063';
export function Component16063({ value = 16063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16063, 'data-value': derived.doubled }, children);
}
export default Component16063;
