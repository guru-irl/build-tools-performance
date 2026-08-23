import React from 'react';
const LABEL_8094 = 'component_8094';
export function Component8094({ value = 8094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8094, 'data-value': derived.doubled }, children);
}
export default Component8094;
