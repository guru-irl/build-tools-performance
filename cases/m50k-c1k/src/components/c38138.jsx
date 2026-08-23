import React from 'react';
const LABEL_38138 = 'component_38138';
export function Component38138({ value = 38138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38138, 'data-value': derived.doubled }, children);
}
export default Component38138;
