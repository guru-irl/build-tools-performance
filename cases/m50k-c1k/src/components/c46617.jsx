import React from 'react';
const LABEL_46617 = 'component_46617';
export function Component46617({ value = 46617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46617, 'data-value': derived.doubled }, children);
}
export default Component46617;
