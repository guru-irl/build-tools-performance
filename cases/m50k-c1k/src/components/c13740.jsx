import React from 'react';
const LABEL_13740 = 'component_13740';
export function Component13740({ value = 13740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13740, 'data-value': derived.doubled }, children);
}
export default Component13740;
