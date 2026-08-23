import React from 'react';
const LABEL_31238 = 'component_31238';
export function Component31238({ value = 31238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31238, 'data-value': derived.doubled }, children);
}
export default Component31238;
