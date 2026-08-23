import React from 'react';
const LABEL_31188 = 'component_31188';
export function Component31188({ value = 31188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31188, 'data-value': derived.doubled }, children);
}
export default Component31188;
