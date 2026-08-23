import React from 'react';
const LABEL_11498 = 'component_11498';
export function Component11498({ value = 11498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11498, 'data-value': derived.doubled }, children);
}
export default Component11498;
