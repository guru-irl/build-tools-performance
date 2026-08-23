import React from 'react';
const LABEL_36838 = 'component_36838';
export function Component36838({ value = 36838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36838, 'data-value': derived.doubled }, children);
}
export default Component36838;
