import React from 'react';
const LABEL_13797 = 'component_13797';
export function Component13797({ value = 13797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13797, 'data-value': derived.doubled }, children);
}
export default Component13797;
