import React from 'react';
const LABEL_15952 = 'component_15952';
export function Component15952({ value = 15952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15952, 'data-value': derived.doubled }, children);
}
export default Component15952;
