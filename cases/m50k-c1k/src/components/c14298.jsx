import React from 'react';
const LABEL_14298 = 'component_14298';
export function Component14298({ value = 14298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14298, 'data-value': derived.doubled }, children);
}
export default Component14298;
