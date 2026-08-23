import React from 'react';
const LABEL_1505 = 'component_1505';
export function Component1505({ value = 1505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1505, 'data-value': derived.doubled }, children);
}
export default Component1505;
