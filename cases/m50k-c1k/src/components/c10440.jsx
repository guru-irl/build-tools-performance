import React from 'react';
const LABEL_10440 = 'component_10440';
export function Component10440({ value = 10440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10440, 'data-value': derived.doubled }, children);
}
export default Component10440;
