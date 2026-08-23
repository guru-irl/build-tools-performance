import React from 'react';
const LABEL_17425 = 'component_17425';
export function Component17425({ value = 17425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17425, 'data-value': derived.doubled }, children);
}
export default Component17425;
