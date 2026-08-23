import React from 'react';
const LABEL_13904 = 'component_13904';
export function Component13904({ value = 13904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13904, 'data-value': derived.doubled }, children);
}
export default Component13904;
