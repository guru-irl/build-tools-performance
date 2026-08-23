import React from 'react';
const LABEL_11325 = 'component_11325';
export function Component11325({ value = 11325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11325, 'data-value': derived.doubled }, children);
}
export default Component11325;
