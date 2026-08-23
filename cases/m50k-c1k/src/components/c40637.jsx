import React from 'react';
const LABEL_40637 = 'component_40637';
export function Component40637({ value = 40637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40637, 'data-value': derived.doubled }, children);
}
export default Component40637;
