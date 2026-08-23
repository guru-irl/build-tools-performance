import React from 'react';
const LABEL_32424 = 'component_32424';
export function Component32424({ value = 32424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32424, 'data-value': derived.doubled }, children);
}
export default Component32424;
