import React from 'react';
const LABEL_11818 = 'component_11818';
export function Component11818({ value = 11818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11818, 'data-value': derived.doubled }, children);
}
export default Component11818;
