import React from 'react';
const LABEL_39840 = 'component_39840';
export function Component39840({ value = 39840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39840, 'data-value': derived.doubled }, children);
}
export default Component39840;
