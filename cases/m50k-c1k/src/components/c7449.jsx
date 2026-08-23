import React from 'react';
const LABEL_7449 = 'component_7449';
export function Component7449({ value = 7449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7449, 'data-value': derived.doubled }, children);
}
export default Component7449;
