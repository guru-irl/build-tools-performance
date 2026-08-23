import React from 'react';
const LABEL_5180 = 'component_5180';
export function Component5180({ value = 5180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5180, 'data-value': derived.doubled }, children);
}
export default Component5180;
