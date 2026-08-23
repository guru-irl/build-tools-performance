import React from 'react';
const LABEL_28740 = 'component_28740';
export function Component28740({ value = 28740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28740, 'data-value': derived.doubled }, children);
}
export default Component28740;
