import React from 'react';
const LABEL_7481 = 'component_7481';
export function Component7481({ value = 7481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7481, 'data-value': derived.doubled }, children);
}
export default Component7481;
