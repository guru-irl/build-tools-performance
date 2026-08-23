import React from 'react';
const LABEL_2238 = 'component_2238';
export function Component2238({ value = 2238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2238, 'data-value': derived.doubled }, children);
}
export default Component2238;
