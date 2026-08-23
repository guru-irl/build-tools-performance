import React from 'react';
const LABEL_39387 = 'component_39387';
export function Component39387({ value = 39387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39387, 'data-value': derived.doubled }, children);
}
export default Component39387;
