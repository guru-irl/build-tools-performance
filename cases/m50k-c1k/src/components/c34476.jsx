import React from 'react';
const LABEL_34476 = 'component_34476';
export function Component34476({ value = 34476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34476, 'data-value': derived.doubled }, children);
}
export default Component34476;
