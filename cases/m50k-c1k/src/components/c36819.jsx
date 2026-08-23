import React from 'react';
const LABEL_36819 = 'component_36819';
export function Component36819({ value = 36819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36819, 'data-value': derived.doubled }, children);
}
export default Component36819;
