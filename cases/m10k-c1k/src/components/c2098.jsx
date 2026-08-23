import React from 'react';
const LABEL_2098 = 'component_2098';
export function Component2098({ value = 2098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2098, 'data-value': derived.doubled }, children);
}
export default Component2098;
