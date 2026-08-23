import React from 'react';
const LABEL_5304 = 'component_5304';
export function Component5304({ value = 5304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5304, 'data-value': derived.doubled }, children);
}
export default Component5304;
