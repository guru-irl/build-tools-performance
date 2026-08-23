import React from 'react';
const LABEL_16866 = 'component_16866';
export function Component16866({ value = 16866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16866, 'data-value': derived.doubled }, children);
}
export default Component16866;
