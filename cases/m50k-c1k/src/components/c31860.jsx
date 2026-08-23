import React from 'react';
const LABEL_31860 = 'component_31860';
export function Component31860({ value = 31860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31860, 'data-value': derived.doubled }, children);
}
export default Component31860;
