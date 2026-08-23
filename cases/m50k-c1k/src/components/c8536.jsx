import React from 'react';
const LABEL_8536 = 'component_8536';
export function Component8536({ value = 8536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8536, 'data-value': derived.doubled }, children);
}
export default Component8536;
