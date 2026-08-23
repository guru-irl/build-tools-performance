import React from 'react';
const LABEL_38858 = 'component_38858';
export function Component38858({ value = 38858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38858, 'data-value': derived.doubled }, children);
}
export default Component38858;
