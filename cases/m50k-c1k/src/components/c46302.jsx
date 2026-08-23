import React from 'react';
const LABEL_46302 = 'component_46302';
export function Component46302({ value = 46302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46302, 'data-value': derived.doubled }, children);
}
export default Component46302;
