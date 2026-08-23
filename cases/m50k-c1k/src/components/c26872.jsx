import React from 'react';
const LABEL_26872 = 'component_26872';
export function Component26872({ value = 26872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26872, 'data-value': derived.doubled }, children);
}
export default Component26872;
