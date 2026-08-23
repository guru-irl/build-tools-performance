import React from 'react';
const LABEL_4437 = 'component_4437';
export function Component4437({ value = 4437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4437, 'data-value': derived.doubled }, children);
}
export default Component4437;
