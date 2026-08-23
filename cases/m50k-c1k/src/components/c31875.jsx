import React from 'react';
const LABEL_31875 = 'component_31875';
export function Component31875({ value = 31875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31875, 'data-value': derived.doubled }, children);
}
export default Component31875;
