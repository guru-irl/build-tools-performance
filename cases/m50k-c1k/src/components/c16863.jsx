import React from 'react';
const LABEL_16863 = 'component_16863';
export function Component16863({ value = 16863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16863, 'data-value': derived.doubled }, children);
}
export default Component16863;
