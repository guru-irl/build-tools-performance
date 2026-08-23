import React from 'react';
const LABEL_2186 = 'component_2186';
export function Component2186({ value = 2186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2186, 'data-value': derived.doubled }, children);
}
export default Component2186;
