import React from 'react';
const LABEL_8933 = 'component_8933';
export function Component8933({ value = 8933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8933, 'data-value': derived.doubled }, children);
}
export default Component8933;
