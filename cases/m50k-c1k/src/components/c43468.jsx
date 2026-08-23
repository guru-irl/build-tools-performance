import React from 'react';
const LABEL_43468 = 'component_43468';
export function Component43468({ value = 43468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43468, 'data-value': derived.doubled }, children);
}
export default Component43468;
