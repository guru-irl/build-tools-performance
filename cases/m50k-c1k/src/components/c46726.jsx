import React from 'react';
const LABEL_46726 = 'component_46726';
export function Component46726({ value = 46726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46726, 'data-value': derived.doubled }, children);
}
export default Component46726;
