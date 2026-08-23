import React from 'react';
const LABEL_8118 = 'component_8118';
export function Component8118({ value = 8118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8118, 'data-value': derived.doubled }, children);
}
export default Component8118;
