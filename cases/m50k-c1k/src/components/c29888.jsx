import React from 'react';
const LABEL_29888 = 'component_29888';
export function Component29888({ value = 29888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29888, 'data-value': derived.doubled }, children);
}
export default Component29888;
