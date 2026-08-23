import React from 'react';
const LABEL_20048 = 'component_20048';
export function Component20048({ value = 20048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20048, 'data-value': derived.doubled }, children);
}
export default Component20048;
