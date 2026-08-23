import React from 'react';
const LABEL_88 = 'component_88';
export function Component88({ value = 88, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_88, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_88, 'data-value': derived.doubled }, children);
}
export default Component88;
