import React from 'react';
const LABEL_30637 = 'component_30637';
export function Component30637({ value = 30637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30637, 'data-value': derived.doubled }, children);
}
export default Component30637;
