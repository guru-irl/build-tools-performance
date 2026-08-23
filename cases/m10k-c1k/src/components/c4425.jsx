import React from 'react';
const LABEL_4425 = 'component_4425';
export function Component4425({ value = 4425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4425, 'data-value': derived.doubled }, children);
}
export default Component4425;
