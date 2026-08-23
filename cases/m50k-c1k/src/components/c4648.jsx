import React from 'react';
const LABEL_4648 = 'component_4648';
export function Component4648({ value = 4648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4648, 'data-value': derived.doubled }, children);
}
export default Component4648;
