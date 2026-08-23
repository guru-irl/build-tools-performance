import React from 'react';
const LABEL_11664 = 'component_11664';
export function Component11664({ value = 11664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11664, 'data-value': derived.doubled }, children);
}
export default Component11664;
