import React from 'react';
const LABEL_25299 = 'component_25299';
export function Component25299({ value = 25299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25299, 'data-value': derived.doubled }, children);
}
export default Component25299;
