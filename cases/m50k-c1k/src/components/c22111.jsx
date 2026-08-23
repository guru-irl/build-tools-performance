import React from 'react';
const LABEL_22111 = 'component_22111';
export function Component22111({ value = 22111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22111, 'data-value': derived.doubled }, children);
}
export default Component22111;
