import React from 'react';
const LABEL_35414 = 'component_35414';
export function Component35414({ value = 35414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35414, 'data-value': derived.doubled }, children);
}
export default Component35414;
