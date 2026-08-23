import React from 'react';
const LABEL_4888 = 'component_4888';
export function Component4888({ value = 4888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4888, 'data-value': derived.doubled }, children);
}
export default Component4888;
