import React from 'react';
const LABEL_44791 = 'component_44791';
export function Component44791({ value = 44791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44791, 'data-value': derived.doubled }, children);
}
export default Component44791;
