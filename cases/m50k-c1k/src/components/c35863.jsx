import React from 'react';
const LABEL_35863 = 'component_35863';
export function Component35863({ value = 35863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35863, 'data-value': derived.doubled }, children);
}
export default Component35863;
