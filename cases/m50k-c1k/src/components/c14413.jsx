import React from 'react';
const LABEL_14413 = 'component_14413';
export function Component14413({ value = 14413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14413, 'data-value': derived.doubled }, children);
}
export default Component14413;
