import React from 'react';
const LABEL_39440 = 'component_39440';
export function Component39440({ value = 39440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39440, 'data-value': derived.doubled }, children);
}
export default Component39440;
