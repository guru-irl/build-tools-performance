import React from 'react';
const LABEL_2613 = 'component_2613';
export function Component2613({ value = 2613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2613, 'data-value': derived.doubled }, children);
}
export default Component2613;
