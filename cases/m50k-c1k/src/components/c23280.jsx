import React from 'react';
const LABEL_23280 = 'component_23280';
export function Component23280({ value = 23280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23280, 'data-value': derived.doubled }, children);
}
export default Component23280;
