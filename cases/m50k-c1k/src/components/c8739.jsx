import React from 'react';
const LABEL_8739 = 'component_8739';
export function Component8739({ value = 8739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8739, 'data-value': derived.doubled }, children);
}
export default Component8739;
