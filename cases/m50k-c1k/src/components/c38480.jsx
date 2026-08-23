import React from 'react';
const LABEL_38480 = 'component_38480';
export function Component38480({ value = 38480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38480, 'data-value': derived.doubled }, children);
}
export default Component38480;
