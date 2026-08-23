import React from 'react';
const LABEL_15872 = 'component_15872';
export function Component15872({ value = 15872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15872, 'data-value': derived.doubled }, children);
}
export default Component15872;
