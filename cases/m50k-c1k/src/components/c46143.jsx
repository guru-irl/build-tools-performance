import React from 'react';
const LABEL_46143 = 'component_46143';
export function Component46143({ value = 46143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46143, 'data-value': derived.doubled }, children);
}
export default Component46143;
