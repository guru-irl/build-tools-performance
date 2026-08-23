import React from 'react';
const LABEL_14517 = 'component_14517';
export function Component14517({ value = 14517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14517, 'data-value': derived.doubled }, children);
}
export default Component14517;
