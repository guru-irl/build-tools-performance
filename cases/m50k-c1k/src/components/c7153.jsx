import React from 'react';
const LABEL_7153 = 'component_7153';
export function Component7153({ value = 7153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7153, 'data-value': derived.doubled }, children);
}
export default Component7153;
