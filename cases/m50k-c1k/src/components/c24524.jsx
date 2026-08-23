import React from 'react';
const LABEL_24524 = 'component_24524';
export function Component24524({ value = 24524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24524, 'data-value': derived.doubled }, children);
}
export default Component24524;
