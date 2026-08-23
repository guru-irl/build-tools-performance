import React from 'react';
const LABEL_6306 = 'component_6306';
export function Component6306({ value = 6306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6306, 'data-value': derived.doubled }, children);
}
export default Component6306;
