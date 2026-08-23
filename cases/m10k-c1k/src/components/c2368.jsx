import React from 'react';
const LABEL_2368 = 'component_2368';
export function Component2368({ value = 2368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2368, 'data-value': derived.doubled }, children);
}
export default Component2368;
