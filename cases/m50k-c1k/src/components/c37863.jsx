import React from 'react';
const LABEL_37863 = 'component_37863';
export function Component37863({ value = 37863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37863, 'data-value': derived.doubled }, children);
}
export default Component37863;
