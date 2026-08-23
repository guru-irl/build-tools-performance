import React from 'react';
const LABEL_14554 = 'component_14554';
export function Component14554({ value = 14554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14554, 'data-value': derived.doubled }, children);
}
export default Component14554;
