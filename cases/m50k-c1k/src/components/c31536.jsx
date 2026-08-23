import React from 'react';
const LABEL_31536 = 'component_31536';
export function Component31536({ value = 31536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31536, 'data-value': derived.doubled }, children);
}
export default Component31536;
