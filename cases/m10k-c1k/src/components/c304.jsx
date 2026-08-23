import React from 'react';
const LABEL_304 = 'component_304';
export function Component304({ value = 304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_304, 'data-value': derived.doubled }, children);
}
export default Component304;
