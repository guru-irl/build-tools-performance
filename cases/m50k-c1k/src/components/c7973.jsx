import React from 'react';
const LABEL_7973 = 'component_7973';
export function Component7973({ value = 7973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7973, 'data-value': derived.doubled }, children);
}
export default Component7973;
