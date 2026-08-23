import React from 'react';
const LABEL_37818 = 'component_37818';
export function Component37818({ value = 37818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37818, 'data-value': derived.doubled }, children);
}
export default Component37818;
