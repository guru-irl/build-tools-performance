import React from 'react';
const LABEL_31660 = 'component_31660';
export function Component31660({ value = 31660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31660, 'data-value': derived.doubled }, children);
}
export default Component31660;
