import React from 'react';
const LABEL_32094 = 'component_32094';
export function Component32094({ value = 32094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32094, 'data-value': derived.doubled }, children);
}
export default Component32094;
