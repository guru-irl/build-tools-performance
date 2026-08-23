import React from 'react';
const LABEL_12292 = 'component_12292';
export function Component12292({ value = 12292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12292, 'data-value': derived.doubled }, children);
}
export default Component12292;
