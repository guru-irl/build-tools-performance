import React from 'react';
const LABEL_26840 = 'component_26840';
export function Component26840({ value = 26840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26840, 'data-value': derived.doubled }, children);
}
export default Component26840;
