import React from 'react';
const LABEL_39936 = 'component_39936';
export function Component39936({ value = 39936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39936, 'data-value': derived.doubled }, children);
}
export default Component39936;
