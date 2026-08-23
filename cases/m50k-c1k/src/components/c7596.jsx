import React from 'react';
const LABEL_7596 = 'component_7596';
export function Component7596({ value = 7596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7596, 'data-value': derived.doubled }, children);
}
export default Component7596;
