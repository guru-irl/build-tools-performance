import React from 'react';
const LABEL_32153 = 'component_32153';
export function Component32153({ value = 32153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32153, 'data-value': derived.doubled }, children);
}
export default Component32153;
