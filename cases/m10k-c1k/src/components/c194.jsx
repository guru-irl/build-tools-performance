import React from 'react';
const LABEL_194 = 'component_194';
export function Component194({ value = 194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_194, 'data-value': derived.doubled }, children);
}
export default Component194;
