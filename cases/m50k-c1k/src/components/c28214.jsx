import React from 'react';
const LABEL_28214 = 'component_28214';
export function Component28214({ value = 28214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28214, 'data-value': derived.doubled }, children);
}
export default Component28214;
