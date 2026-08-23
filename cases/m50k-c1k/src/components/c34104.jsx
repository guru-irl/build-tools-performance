import React from 'react';
const LABEL_34104 = 'component_34104';
export function Component34104({ value = 34104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34104, 'data-value': derived.doubled }, children);
}
export default Component34104;
