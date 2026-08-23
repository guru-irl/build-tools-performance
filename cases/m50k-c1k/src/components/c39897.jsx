import React from 'react';
const LABEL_39897 = 'component_39897';
export function Component39897({ value = 39897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39897, 'data-value': derived.doubled }, children);
}
export default Component39897;
