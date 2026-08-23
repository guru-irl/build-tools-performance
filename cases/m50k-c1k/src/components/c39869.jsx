import React from 'react';
const LABEL_39869 = 'component_39869';
export function Component39869({ value = 39869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39869, 'data-value': derived.doubled }, children);
}
export default Component39869;
