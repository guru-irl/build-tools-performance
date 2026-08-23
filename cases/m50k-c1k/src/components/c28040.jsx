import React from 'react';
const LABEL_28040 = 'component_28040';
export function Component28040({ value = 28040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28040, 'data-value': derived.doubled }, children);
}
export default Component28040;
