import React from 'react';
const LABEL_34417 = 'component_34417';
export function Component34417({ value = 34417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34417, 'data-value': derived.doubled }, children);
}
export default Component34417;
