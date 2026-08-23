import React from 'react';
const LABEL_767 = 'component_767';
export function Component767({ value = 767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_767, 'data-value': derived.doubled }, children);
}
export default Component767;
