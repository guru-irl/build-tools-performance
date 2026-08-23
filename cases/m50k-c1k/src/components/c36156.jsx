import React from 'react';
const LABEL_36156 = 'component_36156';
export function Component36156({ value = 36156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36156, 'data-value': derived.doubled }, children);
}
export default Component36156;
