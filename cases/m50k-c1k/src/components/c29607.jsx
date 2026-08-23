import React from 'react';
const LABEL_29607 = 'component_29607';
export function Component29607({ value = 29607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29607, 'data-value': derived.doubled }, children);
}
export default Component29607;
