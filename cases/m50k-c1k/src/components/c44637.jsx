import React from 'react';
const LABEL_44637 = 'component_44637';
export function Component44637({ value = 44637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44637, 'data-value': derived.doubled }, children);
}
export default Component44637;
