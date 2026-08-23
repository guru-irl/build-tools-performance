import React from 'react';
const LABEL_12175 = 'component_12175';
export function Component12175({ value = 12175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12175, 'data-value': derived.doubled }, children);
}
export default Component12175;
