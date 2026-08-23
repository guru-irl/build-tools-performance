import React from 'react';
const LABEL_14989 = 'component_14989';
export function Component14989({ value = 14989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14989, 'data-value': derived.doubled }, children);
}
export default Component14989;
