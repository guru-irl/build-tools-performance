import React from 'react';
const LABEL_14189 = 'component_14189';
export function Component14189({ value = 14189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14189, 'data-value': derived.doubled }, children);
}
export default Component14189;
