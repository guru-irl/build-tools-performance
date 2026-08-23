import React from 'react';
const LABEL_7536 = 'component_7536';
export function Component7536({ value = 7536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7536, 'data-value': derived.doubled }, children);
}
export default Component7536;
