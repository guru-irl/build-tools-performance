import React from 'react';
const LABEL_17522 = 'component_17522';
export function Component17522({ value = 17522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17522, 'data-value': derived.doubled }, children);
}
export default Component17522;
