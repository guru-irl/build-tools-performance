import React from 'react';
const LABEL_20643 = 'component_20643';
export function Component20643({ value = 20643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20643, 'data-value': derived.doubled }, children);
}
export default Component20643;
