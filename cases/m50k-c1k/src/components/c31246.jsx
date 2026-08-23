import React from 'react';
const LABEL_31246 = 'component_31246';
export function Component31246({ value = 31246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31246, 'data-value': derived.doubled }, children);
}
export default Component31246;
