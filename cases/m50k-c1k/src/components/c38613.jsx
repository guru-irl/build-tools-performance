import React from 'react';
const LABEL_38613 = 'component_38613';
export function Component38613({ value = 38613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38613, 'data-value': derived.doubled }, children);
}
export default Component38613;
