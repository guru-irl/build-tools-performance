import React from 'react';
const LABEL_5228 = 'component_5228';
export function Component5228({ value = 5228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5228, 'data-value': derived.doubled }, children);
}
export default Component5228;
