import React from 'react';
const LABEL_28637 = 'component_28637';
export function Component28637({ value = 28637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28637, 'data-value': derived.doubled }, children);
}
export default Component28637;
