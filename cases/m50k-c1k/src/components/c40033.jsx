import React from 'react';
const LABEL_40033 = 'component_40033';
export function Component40033({ value = 40033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40033, 'data-value': derived.doubled }, children);
}
export default Component40033;
