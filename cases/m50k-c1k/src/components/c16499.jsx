import React from 'react';
const LABEL_16499 = 'component_16499';
export function Component16499({ value = 16499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16499, 'data-value': derived.doubled }, children);
}
export default Component16499;
