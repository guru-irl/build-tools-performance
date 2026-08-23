import React from 'react';
const LABEL_26869 = 'component_26869';
export function Component26869({ value = 26869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26869, 'data-value': derived.doubled }, children);
}
export default Component26869;
