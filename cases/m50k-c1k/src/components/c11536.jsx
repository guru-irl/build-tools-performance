import React from 'react';
const LABEL_11536 = 'component_11536';
export function Component11536({ value = 11536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11536, 'data-value': derived.doubled }, children);
}
export default Component11536;
