import React from 'react';
const LABEL_29895 = 'component_29895';
export function Component29895({ value = 29895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29895, 'data-value': derived.doubled }, children);
}
export default Component29895;
