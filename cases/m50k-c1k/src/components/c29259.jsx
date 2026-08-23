import React from 'react';
const LABEL_29259 = 'component_29259';
export function Component29259({ value = 29259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29259, 'data-value': derived.doubled }, children);
}
export default Component29259;
