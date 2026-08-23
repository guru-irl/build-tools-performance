import React from 'react';
const LABEL_37338 = 'component_37338';
export function Component37338({ value = 37338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37338, 'data-value': derived.doubled }, children);
}
export default Component37338;
