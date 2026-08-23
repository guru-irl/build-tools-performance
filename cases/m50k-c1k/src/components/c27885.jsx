import React from 'react';
const LABEL_27885 = 'component_27885';
export function Component27885({ value = 27885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27885, 'data-value': derived.doubled }, children);
}
export default Component27885;
