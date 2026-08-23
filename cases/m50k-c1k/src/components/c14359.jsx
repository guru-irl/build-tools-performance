import React from 'react';
const LABEL_14359 = 'component_14359';
export function Component14359({ value = 14359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14359, 'data-value': derived.doubled }, children);
}
export default Component14359;
