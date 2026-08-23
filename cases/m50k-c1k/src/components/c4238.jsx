import React from 'react';
const LABEL_4238 = 'component_4238';
export function Component4238({ value = 4238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4238, 'data-value': derived.doubled }, children);
}
export default Component4238;
