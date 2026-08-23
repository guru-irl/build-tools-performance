import React from 'react';
const LABEL_3536 = 'component_3536';
export function Component3536({ value = 3536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3536, 'data-value': derived.doubled }, children);
}
export default Component3536;
