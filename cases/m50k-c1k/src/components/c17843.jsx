import React from 'react';
const LABEL_17843 = 'component_17843';
export function Component17843({ value = 17843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17843, 'data-value': derived.doubled }, children);
}
export default Component17843;
