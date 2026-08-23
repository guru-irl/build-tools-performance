import React from 'react';
const LABEL_17293 = 'component_17293';
export function Component17293({ value = 17293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17293, 'data-value': derived.doubled }, children);
}
export default Component17293;
