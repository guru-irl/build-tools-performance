import React from 'react';
const LABEL_1973 = 'component_1973';
export function Component1973({ value = 1973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1973, 'data-value': derived.doubled }, children);
}
export default Component1973;
