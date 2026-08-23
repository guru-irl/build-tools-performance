import React from 'react';
const LABEL_40648 = 'component_40648';
export function Component40648({ value = 40648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40648, 'data-value': derived.doubled }, children);
}
export default Component40648;
