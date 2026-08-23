import React from 'react';
const LABEL_2086 = 'component_2086';
export function Component2086({ value = 2086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2086, 'data-value': derived.doubled }, children);
}
export default Component2086;
