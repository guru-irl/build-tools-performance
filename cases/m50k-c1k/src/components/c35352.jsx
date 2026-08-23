import React from 'react';
const LABEL_35352 = 'component_35352';
export function Component35352({ value = 35352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35352, 'data-value': derived.doubled }, children);
}
export default Component35352;
