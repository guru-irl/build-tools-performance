import React from 'react';
const LABEL_7020 = 'component_7020';
export function Component7020({ value = 7020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7020, 'data-value': derived.doubled }, children);
}
export default Component7020;
