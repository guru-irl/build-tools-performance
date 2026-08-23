import React from 'react';
const LABEL_13460 = 'component_13460';
export function Component13460({ value = 13460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13460, 'data-value': derived.doubled }, children);
}
export default Component13460;
