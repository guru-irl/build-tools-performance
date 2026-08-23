import React from 'react';
const LABEL_26991 = 'component_26991';
export function Component26991({ value = 26991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26991, 'data-value': derived.doubled }, children);
}
export default Component26991;
