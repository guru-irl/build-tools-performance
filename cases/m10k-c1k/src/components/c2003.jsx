import React from 'react';
const LABEL_2003 = 'component_2003';
export function Component2003({ value = 2003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2003, 'data-value': derived.doubled }, children);
}
export default Component2003;
