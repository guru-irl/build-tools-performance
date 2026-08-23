import React from 'react';
const LABEL_140 = 'component_140';
export function Component140({ value = 140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_140, 'data-value': derived.doubled }, children);
}
export default Component140;
