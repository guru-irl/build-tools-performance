import React from 'react';
const LABEL_31271 = 'component_31271';
export function Component31271({ value = 31271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31271, 'data-value': derived.doubled }, children);
}
export default Component31271;
