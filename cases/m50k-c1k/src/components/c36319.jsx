import React from 'react';
const LABEL_36319 = 'component_36319';
export function Component36319({ value = 36319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36319, 'data-value': derived.doubled }, children);
}
export default Component36319;
