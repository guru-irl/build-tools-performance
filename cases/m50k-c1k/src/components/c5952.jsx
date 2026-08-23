import React from 'react';
const LABEL_5952 = 'component_5952';
export function Component5952({ value = 5952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5952, 'data-value': derived.doubled }, children);
}
export default Component5952;
