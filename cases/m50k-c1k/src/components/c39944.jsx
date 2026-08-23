import React from 'react';
const LABEL_39944 = 'component_39944';
export function Component39944({ value = 39944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39944, 'data-value': derived.doubled }, children);
}
export default Component39944;
