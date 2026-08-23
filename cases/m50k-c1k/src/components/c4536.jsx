import React from 'react';
const LABEL_4536 = 'component_4536';
export function Component4536({ value = 4536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4536, 'data-value': derived.doubled }, children);
}
export default Component4536;
