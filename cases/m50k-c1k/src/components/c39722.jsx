import React from 'react';
const LABEL_39722 = 'component_39722';
export function Component39722({ value = 39722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39722, 'data-value': derived.doubled }, children);
}
export default Component39722;
