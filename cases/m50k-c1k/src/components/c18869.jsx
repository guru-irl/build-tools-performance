import React from 'react';
const LABEL_18869 = 'component_18869';
export function Component18869({ value = 18869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18869, 'data-value': derived.doubled }, children);
}
export default Component18869;
