import React from 'react';
const LABEL_35305 = 'component_35305';
export function Component35305({ value = 35305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35305, 'data-value': derived.doubled }, children);
}
export default Component35305;
