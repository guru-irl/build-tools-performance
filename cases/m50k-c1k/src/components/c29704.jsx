import React from 'react';
const LABEL_29704 = 'component_29704';
export function Component29704({ value = 29704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29704, 'data-value': derived.doubled }, children);
}
export default Component29704;
