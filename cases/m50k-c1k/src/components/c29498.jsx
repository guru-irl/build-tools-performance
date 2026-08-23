import React from 'react';
const LABEL_29498 = 'component_29498';
export function Component29498({ value = 29498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29498, 'data-value': derived.doubled }, children);
}
export default Component29498;
