import React from 'react';
const LABEL_30153 = 'component_30153';
export function Component30153({ value = 30153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30153, 'data-value': derived.doubled }, children);
}
export default Component30153;
