import React from 'react';
const LABEL_46840 = 'component_46840';
export function Component46840({ value = 46840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46840, 'data-value': derived.doubled }, children);
}
export default Component46840;
