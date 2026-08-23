import React from 'react';
const LABEL_10304 = 'component_10304';
export function Component10304({ value = 10304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10304, 'data-value': derived.doubled }, children);
}
export default Component10304;
