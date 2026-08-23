import React from 'react';
const LABEL_7258 = 'component_7258';
export function Component7258({ value = 7258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7258, 'data-value': derived.doubled }, children);
}
export default Component7258;
