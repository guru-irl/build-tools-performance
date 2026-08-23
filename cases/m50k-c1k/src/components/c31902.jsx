import React from 'react';
const LABEL_31902 = 'component_31902';
export function Component31902({ value = 31902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31902, 'data-value': derived.doubled }, children);
}
export default Component31902;
