import React from 'react';
const LABEL_2689 = 'component_2689';
export function Component2689({ value = 2689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2689, 'data-value': derived.doubled }, children);
}
export default Component2689;
