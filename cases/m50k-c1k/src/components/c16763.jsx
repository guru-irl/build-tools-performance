import React from 'react';
const LABEL_16763 = 'component_16763';
export function Component16763({ value = 16763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16763, 'data-value': derived.doubled }, children);
}
export default Component16763;
