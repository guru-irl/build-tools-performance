import React from 'react';
const LABEL_6345 = 'component_6345';
export function Component6345({ value = 6345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6345, 'data-value': derived.doubled }, children);
}
export default Component6345;
