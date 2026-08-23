import React from 'react';
const LABEL_10394 = 'component_10394';
export function Component10394({ value = 10394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10394, 'data-value': derived.doubled }, children);
}
export default Component10394;
