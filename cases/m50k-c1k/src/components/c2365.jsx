import React from 'react';
const LABEL_2365 = 'component_2365';
export function Component2365({ value = 2365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2365, 'data-value': derived.doubled }, children);
}
export default Component2365;
