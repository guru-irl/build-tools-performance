import React from 'react';
const LABEL_35739 = 'component_35739';
export function Component35739({ value = 35739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35739, 'data-value': derived.doubled }, children);
}
export default Component35739;
