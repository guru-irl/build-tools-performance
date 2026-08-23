import React from 'react';
const LABEL_325 = 'component_325';
export function Component325({ value = 325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_325, 'data-value': derived.doubled }, children);
}
export default Component325;
