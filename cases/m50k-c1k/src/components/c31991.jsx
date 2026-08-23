import React from 'react';
const LABEL_31991 = 'component_31991';
export function Component31991({ value = 31991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31991, 'data-value': derived.doubled }, children);
}
export default Component31991;
