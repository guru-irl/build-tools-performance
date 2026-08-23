import React from 'react';
const LABEL_39951 = 'component_39951';
export function Component39951({ value = 39951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39951, 'data-value': derived.doubled }, children);
}
export default Component39951;
