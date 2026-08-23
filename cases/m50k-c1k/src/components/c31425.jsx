import React from 'react';
const LABEL_31425 = 'component_31425';
export function Component31425({ value = 31425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31425, 'data-value': derived.doubled }, children);
}
export default Component31425;
