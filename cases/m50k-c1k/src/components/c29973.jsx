import React from 'react';
const LABEL_29973 = 'component_29973';
export function Component29973({ value = 29973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29973, 'data-value': derived.doubled }, children);
}
export default Component29973;
