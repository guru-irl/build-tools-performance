import React from 'react';
const LABEL_31094 = 'component_31094';
export function Component31094({ value = 31094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31094, 'data-value': derived.doubled }, children);
}
export default Component31094;
