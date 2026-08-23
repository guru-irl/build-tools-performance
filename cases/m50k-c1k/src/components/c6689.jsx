import React from 'react';
const LABEL_6689 = 'component_6689';
export function Component6689({ value = 6689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6689, 'data-value': derived.doubled }, children);
}
export default Component6689;
