import React from 'react';
const LABEL_5896 = 'component_5896';
export function Component5896({ value = 5896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5896, 'data-value': derived.doubled }, children);
}
export default Component5896;
