import React from 'react';
const LABEL_39211 = 'component_39211';
export function Component39211({ value = 39211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39211, 'data-value': derived.doubled }, children);
}
export default Component39211;
