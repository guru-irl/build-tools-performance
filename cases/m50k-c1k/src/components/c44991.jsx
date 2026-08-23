import React from 'react';
const LABEL_44991 = 'component_44991';
export function Component44991({ value = 44991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44991, 'data-value': derived.doubled }, children);
}
export default Component44991;
