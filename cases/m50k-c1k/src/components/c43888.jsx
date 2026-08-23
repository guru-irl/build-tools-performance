import React from 'react';
const LABEL_43888 = 'component_43888';
export function Component43888({ value = 43888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43888, 'data-value': derived.doubled }, children);
}
export default Component43888;
