import React from 'react';
const LABEL_31905 = 'component_31905';
export function Component31905({ value = 31905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31905, 'data-value': derived.doubled }, children);
}
export default Component31905;
