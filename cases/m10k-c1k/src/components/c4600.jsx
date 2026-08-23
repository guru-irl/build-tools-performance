import React from 'react';
const LABEL_4600 = 'component_4600';
export function Component4600({ value = 4600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4600, 'data-value': derived.doubled }, children);
}
export default Component4600;
