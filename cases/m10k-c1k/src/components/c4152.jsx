import React from 'react';
const LABEL_4152 = 'component_4152';
export function Component4152({ value = 4152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4152, 'data-value': derived.doubled }, children);
}
export default Component4152;
