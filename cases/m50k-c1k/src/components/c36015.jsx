import React from 'react';
const LABEL_36015 = 'component_36015';
export function Component36015({ value = 36015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36015, 'data-value': derived.doubled }, children);
}
export default Component36015;
