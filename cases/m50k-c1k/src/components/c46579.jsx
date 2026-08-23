import React from 'react';
const LABEL_46579 = 'component_46579';
export function Component46579({ value = 46579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46579, 'data-value': derived.doubled }, children);
}
export default Component46579;
