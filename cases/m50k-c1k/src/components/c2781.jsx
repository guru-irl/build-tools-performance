import React from 'react';
const LABEL_2781 = 'component_2781';
export function Component2781({ value = 2781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2781, 'data-value': derived.doubled }, children);
}
export default Component2781;
