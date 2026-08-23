import React from 'react';
const LABEL_16536 = 'component_16536';
export function Component16536({ value = 16536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16536, 'data-value': derived.doubled }, children);
}
export default Component16536;
