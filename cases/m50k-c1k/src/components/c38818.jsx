import React from 'react';
const LABEL_38818 = 'component_38818';
export function Component38818({ value = 38818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38818, 'data-value': derived.doubled }, children);
}
export default Component38818;
