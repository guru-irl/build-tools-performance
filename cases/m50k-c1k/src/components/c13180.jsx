import React from 'react';
const LABEL_13180 = 'component_13180';
export function Component13180({ value = 13180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13180, 'data-value': derived.doubled }, children);
}
export default Component13180;
