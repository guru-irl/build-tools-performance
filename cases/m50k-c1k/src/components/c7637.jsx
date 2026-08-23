import React from 'react';
const LABEL_7637 = 'component_7637';
export function Component7637({ value = 7637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7637, 'data-value': derived.doubled }, children);
}
export default Component7637;
