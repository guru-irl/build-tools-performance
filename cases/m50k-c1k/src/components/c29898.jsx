import React from 'react';
const LABEL_29898 = 'component_29898';
export function Component29898({ value = 29898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29898, 'data-value': derived.doubled }, children);
}
export default Component29898;
