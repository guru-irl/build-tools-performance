import React from 'react';
const LABEL_20600 = 'component_20600';
export function Component20600({ value = 20600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20600, 'data-value': derived.doubled }, children);
}
export default Component20600;
