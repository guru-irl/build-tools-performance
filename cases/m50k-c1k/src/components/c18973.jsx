import React from 'react';
const LABEL_18973 = 'component_18973';
export function Component18973({ value = 18973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18973, 'data-value': derived.doubled }, children);
}
export default Component18973;
