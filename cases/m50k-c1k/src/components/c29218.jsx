import React from 'react';
const LABEL_29218 = 'component_29218';
export function Component29218({ value = 29218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29218, 'data-value': derived.doubled }, children);
}
export default Component29218;
