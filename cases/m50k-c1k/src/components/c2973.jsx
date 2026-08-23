import React from 'react';
const LABEL_2973 = 'component_2973';
export function Component2973({ value = 2973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2973, 'data-value': derived.doubled }, children);
}
export default Component2973;
