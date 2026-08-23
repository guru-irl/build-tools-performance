import React from 'react';
const LABEL_2359 = 'component_2359';
export function Component2359({ value = 2359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2359, 'data-value': derived.doubled }, children);
}
export default Component2359;
