import React from 'react';
const LABEL_14748 = 'component_14748';
export function Component14748({ value = 14748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14748, 'data-value': derived.doubled }, children);
}
export default Component14748;
