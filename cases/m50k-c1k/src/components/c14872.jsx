import React from 'react';
const LABEL_14872 = 'component_14872';
export function Component14872({ value = 14872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14872, 'data-value': derived.doubled }, children);
}
export default Component14872;
