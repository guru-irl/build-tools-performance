import React from 'react';
const LABEL_11094 = 'component_11094';
export function Component11094({ value = 11094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11094, 'data-value': derived.doubled }, children);
}
export default Component11094;
