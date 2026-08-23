import React from 'react';
const LABEL_14337 = 'component_14337';
export function Component14337({ value = 14337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14337, 'data-value': derived.doubled }, children);
}
export default Component14337;
