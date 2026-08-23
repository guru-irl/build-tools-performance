import React from 'react';
const LABEL_2345 = 'component_2345';
export function Component2345({ value = 2345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2345, 'data-value': derived.doubled }, children);
}
export default Component2345;
