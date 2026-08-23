import React from 'react';
const LABEL_38872 = 'component_38872';
export function Component38872({ value = 38872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38872, 'data-value': derived.doubled }, children);
}
export default Component38872;
