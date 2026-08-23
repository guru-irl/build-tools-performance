import React from 'react';
const LABEL_8797 = 'component_8797';
export function Component8797({ value = 8797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8797, 'data-value': derived.doubled }, children);
}
export default Component8797;
