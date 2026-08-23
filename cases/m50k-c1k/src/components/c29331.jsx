import React from 'react';
const LABEL_29331 = 'component_29331';
export function Component29331({ value = 29331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29331, 'data-value': derived.doubled }, children);
}
export default Component29331;
