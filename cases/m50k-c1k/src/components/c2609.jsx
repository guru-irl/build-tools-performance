import React from 'react';
const LABEL_2609 = 'component_2609';
export function Component2609({ value = 2609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2609, 'data-value': derived.doubled }, children);
}
export default Component2609;
