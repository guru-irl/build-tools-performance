import React from 'react';
const LABEL_8563 = 'component_8563';
export function Component8563({ value = 8563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8563, 'data-value': derived.doubled }, children);
}
export default Component8563;
