import React from 'react';
const LABEL_16730 = 'component_16730';
export function Component16730({ value = 16730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16730, 'data-value': derived.doubled }, children);
}
export default Component16730;
