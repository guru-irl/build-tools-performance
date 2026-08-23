import React from 'react';
const LABEL_4997 = 'component_4997';
export function Component4997({ value = 4997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4997, 'data-value': derived.doubled }, children);
}
export default Component4997;
