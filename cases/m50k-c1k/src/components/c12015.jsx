import React from 'react';
const LABEL_12015 = 'component_12015';
export function Component12015({ value = 12015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12015, 'data-value': derived.doubled }, children);
}
export default Component12015;
