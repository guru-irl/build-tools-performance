import React from 'react';
const LABEL_18229 = 'component_18229';
export function Component18229({ value = 18229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18229, 'data-value': derived.doubled }, children);
}
export default Component18229;
