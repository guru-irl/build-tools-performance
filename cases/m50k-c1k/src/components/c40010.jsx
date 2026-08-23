import React from 'react';
const LABEL_40010 = 'component_40010';
export function Component40010({ value = 40010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40010, 'data-value': derived.doubled }, children);
}
export default Component40010;
