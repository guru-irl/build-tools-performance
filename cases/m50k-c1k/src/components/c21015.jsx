import React from 'react';
const LABEL_21015 = 'component_21015';
export function Component21015({ value = 21015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21015, 'data-value': derived.doubled }, children);
}
export default Component21015;
