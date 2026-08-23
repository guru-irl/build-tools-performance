import React from 'react';
const LABEL_33367 = 'component_33367';
export function Component33367({ value = 33367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33367, 'data-value': derived.doubled }, children);
}
export default Component33367;
