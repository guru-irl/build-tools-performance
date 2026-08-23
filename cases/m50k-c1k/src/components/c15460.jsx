import React from 'react';
const LABEL_15460 = 'component_15460';
export function Component15460({ value = 15460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15460, 'data-value': derived.doubled }, children);
}
export default Component15460;
