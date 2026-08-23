import React from 'react';
const LABEL_42996 = 'component_42996';
export function Component42996({ value = 42996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42996, 'data-value': derived.doubled }, children);
}
export default Component42996;
