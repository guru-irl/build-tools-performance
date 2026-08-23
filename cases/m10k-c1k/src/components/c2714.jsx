import React from 'react';
const LABEL_2714 = 'component_2714';
export function Component2714({ value = 2714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2714, 'data-value': derived.doubled }, children);
}
export default Component2714;
