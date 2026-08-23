import React from 'react';
const LABEL_26425 = 'component_26425';
export function Component26425({ value = 26425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26425, 'data-value': derived.doubled }, children);
}
export default Component26425;
