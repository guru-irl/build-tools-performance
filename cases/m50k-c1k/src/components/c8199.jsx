import React from 'react';
const LABEL_8199 = 'component_8199';
export function Component8199({ value = 8199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8199, 'data-value': derived.doubled }, children);
}
export default Component8199;
