import React from 'react';
const LABEL_43070 = 'component_43070';
export function Component43070({ value = 43070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43070, 'data-value': derived.doubled }, children);
}
export default Component43070;
