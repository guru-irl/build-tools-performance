import React from 'react';
const LABEL_33896 = 'component_33896';
export function Component33896({ value = 33896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33896, 'data-value': derived.doubled }, children);
}
export default Component33896;
