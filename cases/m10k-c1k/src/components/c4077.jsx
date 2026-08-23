import React from 'react';
const LABEL_4077 = 'component_4077';
export function Component4077({ value = 4077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4077, 'data-value': derived.doubled }, children);
}
export default Component4077;
