import React from 'react';
const LABEL_32205 = 'component_32205';
export function Component32205({ value = 32205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32205, 'data-value': derived.doubled }, children);
}
export default Component32205;
