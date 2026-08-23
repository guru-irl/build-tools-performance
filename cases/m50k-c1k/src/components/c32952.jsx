import React from 'react';
const LABEL_32952 = 'component_32952';
export function Component32952({ value = 32952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32952, 'data-value': derived.doubled }, children);
}
export default Component32952;
