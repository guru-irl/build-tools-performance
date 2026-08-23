import React from 'react';
const LABEL_19094 = 'component_19094';
export function Component19094({ value = 19094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19094, 'data-value': derived.doubled }, children);
}
export default Component19094;
