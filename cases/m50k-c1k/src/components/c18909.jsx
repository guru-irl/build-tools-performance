import React from 'react';
const LABEL_18909 = 'component_18909';
export function Component18909({ value = 18909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18909, 'data-value': derived.doubled }, children);
}
export default Component18909;
