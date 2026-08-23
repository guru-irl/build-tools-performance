import React from 'react';
const LABEL_42319 = 'component_42319';
export function Component42319({ value = 42319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42319, 'data-value': derived.doubled }, children);
}
export default Component42319;
