import React from 'react';
const LABEL_1417 = 'component_1417';
export function Component1417({ value = 1417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1417, 'data-value': derived.doubled }, children);
}
export default Component1417;
