import React from 'react';
const LABEL_2177 = 'component_2177';
export function Component2177({ value = 2177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2177, 'data-value': derived.doubled }, children);
}
export default Component2177;
