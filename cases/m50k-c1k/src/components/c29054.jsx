import React from 'react';
const LABEL_29054 = 'component_29054';
export function Component29054({ value = 29054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29054, 'data-value': derived.doubled }, children);
}
export default Component29054;
