import React from 'react';
const LABEL_13164 = 'component_13164';
export function Component13164({ value = 13164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13164, 'data-value': derived.doubled }, children);
}
export default Component13164;
