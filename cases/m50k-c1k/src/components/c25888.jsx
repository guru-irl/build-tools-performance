import React from 'react';
const LABEL_25888 = 'component_25888';
export function Component25888({ value = 25888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25888, 'data-value': derived.doubled }, children);
}
export default Component25888;
