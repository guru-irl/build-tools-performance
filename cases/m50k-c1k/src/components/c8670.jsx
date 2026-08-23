import React from 'react';
const LABEL_8670 = 'component_8670';
export function Component8670({ value = 8670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8670, 'data-value': derived.doubled }, children);
}
export default Component8670;
