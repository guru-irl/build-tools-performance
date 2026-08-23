import React from 'react';
const LABEL_18971 = 'component_18971';
export function Component18971({ value = 18971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18971, 'data-value': derived.doubled }, children);
}
export default Component18971;
