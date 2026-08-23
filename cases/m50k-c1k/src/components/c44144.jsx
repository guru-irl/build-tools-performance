import React from 'react';
const LABEL_44144 = 'component_44144';
export function Component44144({ value = 44144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44144, 'data-value': derived.doubled }, children);
}
export default Component44144;
