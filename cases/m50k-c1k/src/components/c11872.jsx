import React from 'react';
const LABEL_11872 = 'component_11872';
export function Component11872({ value = 11872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11872, 'data-value': derived.doubled }, children);
}
export default Component11872;
