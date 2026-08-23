import React from 'react';
const LABEL_39872 = 'component_39872';
export function Component39872({ value = 39872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39872, 'data-value': derived.doubled }, children);
}
export default Component39872;
