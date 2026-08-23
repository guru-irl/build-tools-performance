import React from 'react';
const LABEL_13253 = 'component_13253';
export function Component13253({ value = 13253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13253, 'data-value': derived.doubled }, children);
}
export default Component13253;
