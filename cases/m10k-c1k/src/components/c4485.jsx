import React from 'react';
const LABEL_4485 = 'component_4485';
export function Component4485({ value = 4485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4485, 'data-value': derived.doubled }, children);
}
export default Component4485;
