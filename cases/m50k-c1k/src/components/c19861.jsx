import React from 'react';
const LABEL_19861 = 'component_19861';
export function Component19861({ value = 19861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19861, 'data-value': derived.doubled }, children);
}
export default Component19861;
