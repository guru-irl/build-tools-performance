import React from 'react';
const LABEL_46884 = 'component_46884';
export function Component46884({ value = 46884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46884, 'data-value': derived.doubled }, children);
}
export default Component46884;
