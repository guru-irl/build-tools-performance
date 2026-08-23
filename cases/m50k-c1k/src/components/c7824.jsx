import React from 'react';
const LABEL_7824 = 'component_7824';
export function Component7824({ value = 7824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7824, 'data-value': derived.doubled }, children);
}
export default Component7824;
