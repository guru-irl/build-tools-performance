import React from 'react';
const LABEL_4140 = 'component_4140';
export function Component4140({ value = 4140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4140, 'data-value': derived.doubled }, children);
}
export default Component4140;
