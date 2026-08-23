import React from 'react';
const LABEL_15588 = 'component_15588';
export function Component15588({ value = 15588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15588, 'data-value': derived.doubled }, children);
}
export default Component15588;
