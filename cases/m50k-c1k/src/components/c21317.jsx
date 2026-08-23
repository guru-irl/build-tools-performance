import React from 'react';
const LABEL_21317 = 'component_21317';
export function Component21317({ value = 21317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21317, 'data-value': derived.doubled }, children);
}
export default Component21317;
