import React from 'react';
const LABEL_16468 = 'component_16468';
export function Component16468({ value = 16468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16468, 'data-value': derived.doubled }, children);
}
export default Component16468;
