import React from 'react';
const LABEL_2872 = 'component_2872';
export function Component2872({ value = 2872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2872, 'data-value': derived.doubled }, children);
}
export default Component2872;
