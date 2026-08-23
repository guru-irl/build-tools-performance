import React from 'react';
const LABEL_2870 = 'component_2870';
export function Component2870({ value = 2870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2870, 'data-value': derived.doubled }, children);
}
export default Component2870;
