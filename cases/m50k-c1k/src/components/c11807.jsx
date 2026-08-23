import React from 'react';
const LABEL_11807 = 'component_11807';
export function Component11807({ value = 11807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11807, 'data-value': derived.doubled }, children);
}
export default Component11807;
