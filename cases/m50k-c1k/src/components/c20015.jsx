import React from 'react';
const LABEL_20015 = 'component_20015';
export function Component20015({ value = 20015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20015, 'data-value': derived.doubled }, children);
}
export default Component20015;
