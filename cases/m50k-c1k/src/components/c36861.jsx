import React from 'react';
const LABEL_36861 = 'component_36861';
export function Component36861({ value = 36861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36861, 'data-value': derived.doubled }, children);
}
export default Component36861;
