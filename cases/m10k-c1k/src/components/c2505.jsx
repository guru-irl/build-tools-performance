import React from 'react';
const LABEL_2505 = 'component_2505';
export function Component2505({ value = 2505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2505, 'data-value': derived.doubled }, children);
}
export default Component2505;
