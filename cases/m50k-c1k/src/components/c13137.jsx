import React from 'react';
const LABEL_13137 = 'component_13137';
export function Component13137({ value = 13137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13137, 'data-value': derived.doubled }, children);
}
export default Component13137;
