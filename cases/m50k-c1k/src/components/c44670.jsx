import React from 'react';
const LABEL_44670 = 'component_44670';
export function Component44670({ value = 44670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44670, 'data-value': derived.doubled }, children);
}
export default Component44670;
