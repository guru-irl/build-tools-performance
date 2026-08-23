import React from 'react';
const LABEL_31108 = 'component_31108';
export function Component31108({ value = 31108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31108, 'data-value': derived.doubled }, children);
}
export default Component31108;
