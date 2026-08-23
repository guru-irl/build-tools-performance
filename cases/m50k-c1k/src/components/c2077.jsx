import React from 'react';
const LABEL_2077 = 'component_2077';
export function Component2077({ value = 2077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2077, 'data-value': derived.doubled }, children);
}
export default Component2077;
