import React from 'react';
const LABEL_40863 = 'component_40863';
export function Component40863({ value = 40863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40863, 'data-value': derived.doubled }, children);
}
export default Component40863;
