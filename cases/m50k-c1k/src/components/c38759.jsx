import React from 'react';
const LABEL_38759 = 'component_38759';
export function Component38759({ value = 38759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38759, 'data-value': derived.doubled }, children);
}
export default Component38759;
