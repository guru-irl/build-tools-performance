import React from 'react';
const LABEL_2317 = 'component_2317';
export function Component2317({ value = 2317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2317, 'data-value': derived.doubled }, children);
}
export default Component2317;
