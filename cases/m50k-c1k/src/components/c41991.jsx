import React from 'react';
const LABEL_41991 = 'component_41991';
export function Component41991({ value = 41991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41991, 'data-value': derived.doubled }, children);
}
export default Component41991;
