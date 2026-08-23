import React from 'react';
const LABEL_1863 = 'component_1863';
export function Component1863({ value = 1863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1863, 'data-value': derived.doubled }, children);
}
export default Component1863;
