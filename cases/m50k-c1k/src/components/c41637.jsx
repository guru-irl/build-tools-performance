import React from 'react';
const LABEL_41637 = 'component_41637';
export function Component41637({ value = 41637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41637, 'data-value': derived.doubled }, children);
}
export default Component41637;
