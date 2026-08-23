import React from 'react';
const LABEL_4325 = 'component_4325';
export function Component4325({ value = 4325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4325, 'data-value': derived.doubled }, children);
}
export default Component4325;
