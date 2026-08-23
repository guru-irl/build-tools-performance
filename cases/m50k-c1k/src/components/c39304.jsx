import React from 'react';
const LABEL_39304 = 'component_39304';
export function Component39304({ value = 39304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39304, 'data-value': derived.doubled }, children);
}
export default Component39304;
