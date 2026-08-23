import React from 'react';
const LABEL_38108 = 'component_38108';
export function Component38108({ value = 38108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38108, 'data-value': derived.doubled }, children);
}
export default Component38108;
