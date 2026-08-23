import React from 'react';
const LABEL_41601 = 'component_41601';
export function Component41601({ value = 41601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41601, 'data-value': derived.doubled }, children);
}
export default Component41601;
