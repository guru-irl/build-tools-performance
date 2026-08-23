import React from 'react';
const LABEL_32863 = 'component_32863';
export function Component32863({ value = 32863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32863, 'data-value': derived.doubled }, children);
}
export default Component32863;
