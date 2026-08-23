import React from 'react';
const LABEL_46140 = 'component_46140';
export function Component46140({ value = 46140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46140, 'data-value': derived.doubled }, children);
}
export default Component46140;
