import React from 'react';
const LABEL_11585 = 'component_11585';
export function Component11585({ value = 11585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11585, 'data-value': derived.doubled }, children);
}
export default Component11585;
