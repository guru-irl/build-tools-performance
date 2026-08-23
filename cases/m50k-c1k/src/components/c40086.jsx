import React from 'react';
const LABEL_40086 = 'component_40086';
export function Component40086({ value = 40086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40086, 'data-value': derived.doubled }, children);
}
export default Component40086;
