import React from 'react';
const LABEL_26536 = 'component_26536';
export function Component26536({ value = 26536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26536, 'data-value': derived.doubled }, children);
}
export default Component26536;
