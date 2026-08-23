import React from 'react';
const LABEL_38205 = 'component_38205';
export function Component38205({ value = 38205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38205, 'data-value': derived.doubled }, children);
}
export default Component38205;
