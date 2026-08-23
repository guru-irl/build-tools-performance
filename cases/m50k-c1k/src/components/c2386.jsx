import React from 'react';
const LABEL_2386 = 'component_2386';
export function Component2386({ value = 2386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2386, 'data-value': derived.doubled }, children);
}
export default Component2386;
