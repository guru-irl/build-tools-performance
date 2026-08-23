import React from 'react';
const LABEL_2079 = 'component_2079';
export function Component2079({ value = 2079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2079, 'data-value': derived.doubled }, children);
}
export default Component2079;
