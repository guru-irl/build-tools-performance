import React from 'react';
const LABEL_17634 = 'component_17634';
export function Component17634({ value = 17634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17634, 'data-value': derived.doubled }, children);
}
export default Component17634;
