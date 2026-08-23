import React from 'react';
const LABEL_4193 = 'component_4193';
export function Component4193({ value = 4193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4193, 'data-value': derived.doubled }, children);
}
export default Component4193;
