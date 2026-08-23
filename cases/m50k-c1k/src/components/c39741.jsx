import React from 'react';
const LABEL_39741 = 'component_39741';
export function Component39741({ value = 39741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39741, 'data-value': derived.doubled }, children);
}
export default Component39741;
