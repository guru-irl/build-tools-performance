import React from 'react';
const LABEL_46863 = 'component_46863';
export function Component46863({ value = 46863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46863, 'data-value': derived.doubled }, children);
}
export default Component46863;
