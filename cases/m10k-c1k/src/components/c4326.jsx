import React from 'react';
const LABEL_4326 = 'component_4326';
export function Component4326({ value = 4326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4326, 'data-value': derived.doubled }, children);
}
export default Component4326;
