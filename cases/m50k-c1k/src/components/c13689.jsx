import React from 'react';
const LABEL_13689 = 'component_13689';
export function Component13689({ value = 13689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13689, 'data-value': derived.doubled }, children);
}
export default Component13689;
