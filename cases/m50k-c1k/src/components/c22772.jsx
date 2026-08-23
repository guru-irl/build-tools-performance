import React from 'react';
const LABEL_22772 = 'component_22772';
export function Component22772({ value = 22772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22772, 'data-value': derived.doubled }, children);
}
export default Component22772;
