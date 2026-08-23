import React from 'react';
const LABEL_22332 = 'component_22332';
export function Component22332({ value = 22332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22332, 'data-value': derived.doubled }, children);
}
export default Component22332;
