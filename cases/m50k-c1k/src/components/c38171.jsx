import React from 'react';
const LABEL_38171 = 'component_38171';
export function Component38171({ value = 38171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38171, 'data-value': derived.doubled }, children);
}
export default Component38171;
