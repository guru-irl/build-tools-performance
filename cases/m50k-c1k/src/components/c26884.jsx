import React from 'react';
const LABEL_26884 = 'component_26884';
export function Component26884({ value = 26884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26884, 'data-value': derived.doubled }, children);
}
export default Component26884;
