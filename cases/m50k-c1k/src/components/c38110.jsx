import React from 'react';
const LABEL_38110 = 'component_38110';
export function Component38110({ value = 38110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38110, 'data-value': derived.doubled }, children);
}
export default Component38110;
