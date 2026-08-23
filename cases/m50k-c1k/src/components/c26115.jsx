import React from 'react';
const LABEL_26115 = 'component_26115';
export function Component26115({ value = 26115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26115, 'data-value': derived.doubled }, children);
}
export default Component26115;
