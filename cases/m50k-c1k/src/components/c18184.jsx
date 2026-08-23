import React from 'react';
const LABEL_18184 = 'component_18184';
export function Component18184({ value = 18184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18184, 'data-value': derived.doubled }, children);
}
export default Component18184;
