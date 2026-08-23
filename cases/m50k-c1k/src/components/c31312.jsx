import React from 'react';
const LABEL_31312 = 'component_31312';
export function Component31312({ value = 31312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31312, 'data-value': derived.doubled }, children);
}
export default Component31312;
