import React from 'react';
const LABEL_34536 = 'component_34536';
export function Component34536({ value = 34536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34536, 'data-value': derived.doubled }, children);
}
export default Component34536;
