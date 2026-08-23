import React from 'react';
const LABEL_26278 = 'component_26278';
export function Component26278({ value = 26278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26278, 'data-value': derived.doubled }, children);
}
export default Component26278;
