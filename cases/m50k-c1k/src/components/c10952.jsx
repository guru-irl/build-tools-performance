import React from 'react';
const LABEL_10952 = 'component_10952';
export function Component10952({ value = 10952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10952, 'data-value': derived.doubled }, children);
}
export default Component10952;
