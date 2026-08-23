import React from 'react';
const LABEL_44536 = 'component_44536';
export function Component44536({ value = 44536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44536, 'data-value': derived.doubled }, children);
}
export default Component44536;
