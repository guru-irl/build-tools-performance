import React from 'react';
const LABEL_26659 = 'component_26659';
export function Component26659({ value = 26659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26659, 'data-value': derived.doubled }, children);
}
export default Component26659;
