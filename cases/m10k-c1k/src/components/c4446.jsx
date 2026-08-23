import React from 'react';
const LABEL_4446 = 'component_4446';
export function Component4446({ value = 4446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4446, 'data-value': derived.doubled }, children);
}
export default Component4446;
