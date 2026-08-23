import React from 'react';
const LABEL_9303 = 'component_9303';
export function Component9303({ value = 9303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9303, 'data-value': derived.doubled }, children);
}
export default Component9303;
