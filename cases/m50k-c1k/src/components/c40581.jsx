import React from 'react';
const LABEL_40581 = 'component_40581';
export function Component40581({ value = 40581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40581, 'data-value': derived.doubled }, children);
}
export default Component40581;
