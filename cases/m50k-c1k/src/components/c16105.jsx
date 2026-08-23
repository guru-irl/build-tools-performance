import React from 'react';
const LABEL_16105 = 'component_16105';
export function Component16105({ value = 16105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16105, 'data-value': derived.doubled }, children);
}
export default Component16105;
