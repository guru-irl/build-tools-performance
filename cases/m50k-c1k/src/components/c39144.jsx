import React from 'react';
const LABEL_39144 = 'component_39144';
export function Component39144({ value = 39144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39144, 'data-value': derived.doubled }, children);
}
export default Component39144;
