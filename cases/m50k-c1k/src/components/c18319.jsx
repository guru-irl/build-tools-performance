import React from 'react';
const LABEL_18319 = 'component_18319';
export function Component18319({ value = 18319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18319, 'data-value': derived.doubled }, children);
}
export default Component18319;
