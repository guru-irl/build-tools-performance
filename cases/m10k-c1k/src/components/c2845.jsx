import React from 'react';
const LABEL_2845 = 'component_2845';
export function Component2845({ value = 2845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2845, 'data-value': derived.doubled }, children);
}
export default Component2845;
