import React from 'react';
const LABEL_18927 = 'component_18927';
export function Component18927({ value = 18927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18927, 'data-value': derived.doubled }, children);
}
export default Component18927;
