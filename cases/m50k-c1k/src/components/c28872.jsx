import React from 'react';
const LABEL_28872 = 'component_28872';
export function Component28872({ value = 28872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28872, 'data-value': derived.doubled }, children);
}
export default Component28872;
