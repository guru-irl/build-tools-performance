import React from 'react';
const LABEL_6801 = 'component_6801';
export function Component6801({ value = 6801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6801, 'data-value': derived.doubled }, children);
}
export default Component6801;
