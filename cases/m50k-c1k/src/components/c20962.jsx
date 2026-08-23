import React from 'react';
const LABEL_20962 = 'component_20962';
export function Component20962({ value = 20962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20962, 'data-value': derived.doubled }, children);
}
export default Component20962;
