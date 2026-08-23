import React from 'react';
const LABEL_33143 = 'component_33143';
export function Component33143({ value = 33143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33143, 'data-value': derived.doubled }, children);
}
export default Component33143;
