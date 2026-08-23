import React from 'react';
const LABEL_8596 = 'component_8596';
export function Component8596({ value = 8596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8596, 'data-value': derived.doubled }, children);
}
export default Component8596;
