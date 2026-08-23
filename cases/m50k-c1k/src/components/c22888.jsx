import React from 'react';
const LABEL_22888 = 'component_22888';
export function Component22888({ value = 22888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22888, 'data-value': derived.doubled }, children);
}
export default Component22888;
