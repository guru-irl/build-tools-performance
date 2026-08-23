import React from 'react';
const LABEL_14137 = 'component_14137';
export function Component14137({ value = 14137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14137, 'data-value': derived.doubled }, children);
}
export default Component14137;
