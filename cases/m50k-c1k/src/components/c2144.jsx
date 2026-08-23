import React from 'react';
const LABEL_2144 = 'component_2144';
export function Component2144({ value = 2144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2144, 'data-value': derived.doubled }, children);
}
export default Component2144;
