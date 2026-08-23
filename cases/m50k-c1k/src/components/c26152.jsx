import React from 'react';
const LABEL_26152 = 'component_26152';
export function Component26152({ value = 26152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26152, 'data-value': derived.doubled }, children);
}
export default Component26152;
