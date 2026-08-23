import React from 'react';
const LABEL_16523 = 'component_16523';
export function Component16523({ value = 16523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16523, 'data-value': derived.doubled }, children);
}
export default Component16523;
