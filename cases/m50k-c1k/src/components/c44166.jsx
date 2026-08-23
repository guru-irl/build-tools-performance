import React from 'react';
const LABEL_44166 = 'component_44166';
export function Component44166({ value = 44166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44166, 'data-value': derived.doubled }, children);
}
export default Component44166;
