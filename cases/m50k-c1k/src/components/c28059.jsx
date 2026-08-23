import React from 'react';
const LABEL_28059 = 'component_28059';
export function Component28059({ value = 28059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28059, 'data-value': derived.doubled }, children);
}
export default Component28059;
