import React from 'react';
const LABEL_24637 = 'component_24637';
export function Component24637({ value = 24637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24637, 'data-value': derived.doubled }, children);
}
export default Component24637;
