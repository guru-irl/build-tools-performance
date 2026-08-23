import React from 'react';
const LABEL_5637 = 'component_5637';
export function Component5637({ value = 5637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5637, 'data-value': derived.doubled }, children);
}
export default Component5637;
