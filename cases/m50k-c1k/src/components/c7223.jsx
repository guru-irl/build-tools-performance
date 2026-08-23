import React from 'react';
const LABEL_7223 = 'component_7223';
export function Component7223({ value = 7223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7223, 'data-value': derived.doubled }, children);
}
export default Component7223;
