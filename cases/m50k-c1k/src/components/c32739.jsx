import React from 'react';
const LABEL_32739 = 'component_32739';
export function Component32739({ value = 32739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32739, 'data-value': derived.doubled }, children);
}
export default Component32739;
