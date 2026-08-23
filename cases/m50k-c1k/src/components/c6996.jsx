import React from 'react';
const LABEL_6996 = 'component_6996';
export function Component6996({ value = 6996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6996, 'data-value': derived.doubled }, children);
}
export default Component6996;
