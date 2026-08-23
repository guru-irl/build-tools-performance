import React from 'react';
const LABEL_38238 = 'component_38238';
export function Component38238({ value = 38238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38238, 'data-value': derived.doubled }, children);
}
export default Component38238;
