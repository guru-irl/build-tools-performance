import React from 'react';
const LABEL_13739 = 'component_13739';
export function Component13739({ value = 13739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13739, 'data-value': derived.doubled }, children);
}
export default Component13739;
