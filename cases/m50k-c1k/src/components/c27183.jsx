import React from 'react';
const LABEL_27183 = 'component_27183';
export function Component27183({ value = 27183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27183, 'data-value': derived.doubled }, children);
}
export default Component27183;
