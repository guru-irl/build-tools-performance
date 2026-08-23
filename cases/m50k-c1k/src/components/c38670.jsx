import React from 'react';
const LABEL_38670 = 'component_38670';
export function Component38670({ value = 38670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38670, 'data-value': derived.doubled }, children);
}
export default Component38670;
