import React from 'react';
const LABEL_6648 = 'component_6648';
export function Component6648({ value = 6648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6648, 'data-value': derived.doubled }, children);
}
export default Component6648;
