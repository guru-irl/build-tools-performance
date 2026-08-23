import React from 'react';
const LABEL_13613 = 'component_13613';
export function Component13613({ value = 13613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13613, 'data-value': derived.doubled }, children);
}
export default Component13613;
