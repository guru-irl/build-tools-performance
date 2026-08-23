import React from 'react';
const LABEL_12960 = 'component_12960';
export function Component12960({ value = 12960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12960, 'data-value': derived.doubled }, children);
}
export default Component12960;
