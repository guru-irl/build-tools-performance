import React from 'react';
const LABEL_2585 = 'component_2585';
export function Component2585({ value = 2585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2585, 'data-value': derived.doubled }, children);
}
export default Component2585;
