import React from 'react';
const LABEL_14896 = 'component_14896';
export function Component14896({ value = 14896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14896, 'data-value': derived.doubled }, children);
}
export default Component14896;
