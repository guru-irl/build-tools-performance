import React from 'react';
const LABEL_27946 = 'component_27946';
export function Component27946({ value = 27946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27946, 'data-value': derived.doubled }, children);
}
export default Component27946;
