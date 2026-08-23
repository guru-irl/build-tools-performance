import React from 'react';
const LABEL_20840 = 'component_20840';
export function Component20840({ value = 20840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20840, 'data-value': derived.doubled }, children);
}
export default Component20840;
