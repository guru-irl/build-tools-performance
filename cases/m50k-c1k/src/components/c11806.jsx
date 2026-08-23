import React from 'react';
const LABEL_11806 = 'component_11806';
export function Component11806({ value = 11806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11806, 'data-value': derived.doubled }, children);
}
export default Component11806;
