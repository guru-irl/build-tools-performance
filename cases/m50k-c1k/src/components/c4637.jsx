import React from 'react';
const LABEL_4637 = 'component_4637';
export function Component4637({ value = 4637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4637, 'data-value': derived.doubled }, children);
}
export default Component4637;
