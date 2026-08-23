import React from 'react';
const LABEL_18536 = 'component_18536';
export function Component18536({ value = 18536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18536, 'data-value': derived.doubled }, children);
}
export default Component18536;
