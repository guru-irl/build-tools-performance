import React from 'react';
const LABEL_18866 = 'component_18866';
export function Component18866({ value = 18866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18866, 'data-value': derived.doubled }, children);
}
export default Component18866;
