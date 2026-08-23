import React from 'react';
const LABEL_32838 = 'component_32838';
export function Component32838({ value = 32838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32838, 'data-value': derived.doubled }, children);
}
export default Component32838;
