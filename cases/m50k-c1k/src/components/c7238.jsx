import React from 'react';
const LABEL_7238 = 'component_7238';
export function Component7238({ value = 7238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7238, 'data-value': derived.doubled }, children);
}
export default Component7238;
