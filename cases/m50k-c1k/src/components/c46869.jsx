import React from 'react';
const LABEL_46869 = 'component_46869';
export function Component46869({ value = 46869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46869, 'data-value': derived.doubled }, children);
}
export default Component46869;
