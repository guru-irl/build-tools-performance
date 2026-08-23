import React from 'react';
const LABEL_30880 = 'component_30880';
export function Component30880({ value = 30880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30880, 'data-value': derived.doubled }, children);
}
export default Component30880;
