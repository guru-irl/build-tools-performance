import React from 'react';
const LABEL_25425 = 'component_25425';
export function Component25425({ value = 25425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25425, 'data-value': derived.doubled }, children);
}
export default Component25425;
