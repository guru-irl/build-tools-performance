import React from 'react';
const LABEL_21094 = 'component_21094';
export function Component21094({ value = 21094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21094, 'data-value': derived.doubled }, children);
}
export default Component21094;
