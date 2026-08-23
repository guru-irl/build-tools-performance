import React from 'react';
const LABEL_30451 = 'component_30451';
export function Component30451({ value = 30451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30451, 'data-value': derived.doubled }, children);
}
export default Component30451;
