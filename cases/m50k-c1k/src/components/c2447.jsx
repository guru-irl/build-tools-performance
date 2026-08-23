import React from 'react';
const LABEL_2447 = 'component_2447';
export function Component2447({ value = 2447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2447, 'data-value': derived.doubled }, children);
}
export default Component2447;
