import React from 'react';
const LABEL_41536 = 'component_41536';
export function Component41536({ value = 41536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41536, 'data-value': derived.doubled }, children);
}
export default Component41536;
