import React from 'react';
const LABEL_25294 = 'component_25294';
export function Component25294({ value = 25294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25294, 'data-value': derived.doubled }, children);
}
export default Component25294;
