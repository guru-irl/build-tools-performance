import React from 'react';
const LABEL_43962 = 'component_43962';
export function Component43962({ value = 43962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43962, 'data-value': derived.doubled }, children);
}
export default Component43962;
