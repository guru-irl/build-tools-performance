import React from 'react';
const LABEL_46637 = 'component_46637';
export function Component46637({ value = 46637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46637, 'data-value': derived.doubled }, children);
}
export default Component46637;
