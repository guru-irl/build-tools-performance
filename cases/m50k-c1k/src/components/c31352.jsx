import React from 'react';
const LABEL_31352 = 'component_31352';
export function Component31352({ value = 31352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31352, 'data-value': derived.doubled }, children);
}
export default Component31352;
