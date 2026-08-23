import React from 'react';
const LABEL_31244 = 'component_31244';
export function Component31244({ value = 31244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31244, 'data-value': derived.doubled }, children);
}
export default Component31244;
