import React from 'react';
const LABEL_29295 = 'component_29295';
export function Component29295({ value = 29295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29295, 'data-value': derived.doubled }, children);
}
export default Component29295;
