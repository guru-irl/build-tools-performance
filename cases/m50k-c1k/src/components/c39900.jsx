import React from 'react';
const LABEL_39900 = 'component_39900';
export function Component39900({ value = 39900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39900, 'data-value': derived.doubled }, children);
}
export default Component39900;
