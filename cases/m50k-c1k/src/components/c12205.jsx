import React from 'react';
const LABEL_12205 = 'component_12205';
export function Component12205({ value = 12205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12205, 'data-value': derived.doubled }, children);
}
export default Component12205;
