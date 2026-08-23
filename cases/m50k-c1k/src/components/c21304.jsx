import React from 'react';
const LABEL_21304 = 'component_21304';
export function Component21304({ value = 21304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21304, 'data-value': derived.doubled }, children);
}
export default Component21304;
