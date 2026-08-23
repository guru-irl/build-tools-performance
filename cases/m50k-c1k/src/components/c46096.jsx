import React from 'react';
const LABEL_46096 = 'component_46096';
export function Component46096({ value = 46096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46096, 'data-value': derived.doubled }, children);
}
export default Component46096;
