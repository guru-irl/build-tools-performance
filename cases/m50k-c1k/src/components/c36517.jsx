import React from 'react';
const LABEL_36517 = 'component_36517';
export function Component36517({ value = 36517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36517, 'data-value': derived.doubled }, children);
}
export default Component36517;
