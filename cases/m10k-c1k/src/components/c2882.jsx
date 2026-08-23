import React from 'react';
const LABEL_2882 = 'component_2882';
export function Component2882({ value = 2882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2882, 'data-value': derived.doubled }, children);
}
export default Component2882;
