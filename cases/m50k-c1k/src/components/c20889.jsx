import React from 'react';
const LABEL_20889 = 'component_20889';
export function Component20889({ value = 20889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20889, 'data-value': derived.doubled }, children);
}
export default Component20889;
