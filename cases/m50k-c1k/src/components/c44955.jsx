import React from 'react';
const LABEL_44955 = 'component_44955';
export function Component44955({ value = 44955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44955, 'data-value': derived.doubled }, children);
}
export default Component44955;
