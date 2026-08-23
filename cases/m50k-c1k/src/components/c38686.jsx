import React from 'react';
const LABEL_38686 = 'component_38686';
export function Component38686({ value = 38686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38686, 'data-value': derived.doubled }, children);
}
export default Component38686;
