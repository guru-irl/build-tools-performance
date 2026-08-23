import React from 'react';
const LABEL_39207 = 'component_39207';
export function Component39207({ value = 39207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39207, 'data-value': derived.doubled }, children);
}
export default Component39207;
