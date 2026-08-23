import React from 'react';
const LABEL_24304 = 'component_24304';
export function Component24304({ value = 24304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24304, 'data-value': derived.doubled }, children);
}
export default Component24304;
