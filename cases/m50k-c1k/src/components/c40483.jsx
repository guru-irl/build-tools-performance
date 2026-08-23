import React from 'react';
const LABEL_40483 = 'component_40483';
export function Component40483({ value = 40483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40483, 'data-value': derived.doubled }, children);
}
export default Component40483;
