import React from 'react';
const LABEL_8872 = 'component_8872';
export function Component8872({ value = 8872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8872, 'data-value': derived.doubled }, children);
}
export default Component8872;
