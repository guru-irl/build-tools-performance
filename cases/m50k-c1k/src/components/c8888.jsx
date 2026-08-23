import React from 'react';
const LABEL_8888 = 'component_8888';
export function Component8888({ value = 8888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8888, 'data-value': derived.doubled }, children);
}
export default Component8888;
