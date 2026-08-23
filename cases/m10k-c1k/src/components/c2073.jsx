import React from 'react';
const LABEL_2073 = 'component_2073';
export function Component2073({ value = 2073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2073, 'data-value': derived.doubled }, children);
}
export default Component2073;
