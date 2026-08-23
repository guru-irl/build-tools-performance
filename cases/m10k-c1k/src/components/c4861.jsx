import React from 'react';
const LABEL_4861 = 'component_4861';
export function Component4861({ value = 4861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4861, 'data-value': derived.doubled }, children);
}
export default Component4861;
