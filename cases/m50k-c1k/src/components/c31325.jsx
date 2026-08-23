import React from 'react';
const LABEL_31325 = 'component_31325';
export function Component31325({ value = 31325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31325, 'data-value': derived.doubled }, children);
}
export default Component31325;
