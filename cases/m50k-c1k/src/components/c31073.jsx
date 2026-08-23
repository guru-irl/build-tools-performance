import React from 'react';
const LABEL_31073 = 'component_31073';
export function Component31073({ value = 31073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31073, 'data-value': derived.doubled }, children);
}
export default Component31073;
