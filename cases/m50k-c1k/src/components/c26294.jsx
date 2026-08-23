import React from 'react';
const LABEL_26294 = 'component_26294';
export function Component26294({ value = 26294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26294, 'data-value': derived.doubled }, children);
}
export default Component26294;
