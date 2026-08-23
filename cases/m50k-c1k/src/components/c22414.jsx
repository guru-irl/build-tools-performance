import React from 'react';
const LABEL_22414 = 'component_22414';
export function Component22414({ value = 22414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22414, 'data-value': derived.doubled }, children);
}
export default Component22414;
