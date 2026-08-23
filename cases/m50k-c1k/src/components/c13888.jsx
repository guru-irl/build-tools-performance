import React from 'react';
const LABEL_13888 = 'component_13888';
export function Component13888({ value = 13888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13888, 'data-value': derived.doubled }, children);
}
export default Component13888;
