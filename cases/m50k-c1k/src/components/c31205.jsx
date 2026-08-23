import React from 'react';
const LABEL_31205 = 'component_31205';
export function Component31205({ value = 31205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31205, 'data-value': derived.doubled }, children);
}
export default Component31205;
