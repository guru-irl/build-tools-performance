import React from 'react';
const LABEL_19637 = 'component_19637';
export function Component19637({ value = 19637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19637, 'data-value': derived.doubled }, children);
}
export default Component19637;
