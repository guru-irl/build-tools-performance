import React from 'react';
const LABEL_19256 = 'component_19256';
export function Component19256({ value = 19256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19256, 'data-value': derived.doubled }, children);
}
export default Component19256;
