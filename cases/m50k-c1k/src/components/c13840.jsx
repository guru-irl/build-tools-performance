import React from 'react';
const LABEL_13840 = 'component_13840';
export function Component13840({ value = 13840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13840, 'data-value': derived.doubled }, children);
}
export default Component13840;
