import React from 'react';
const LABEL_24353 = 'component_24353';
export function Component24353({ value = 24353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24353, 'data-value': derived.doubled }, children);
}
export default Component24353;
