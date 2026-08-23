import React from 'react';
const LABEL_38668 = 'component_38668';
export function Component38668({ value = 38668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38668, 'data-value': derived.doubled }, children);
}
export default Component38668;
