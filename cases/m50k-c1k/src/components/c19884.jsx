import React from 'react';
const LABEL_19884 = 'component_19884';
export function Component19884({ value = 19884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19884, 'data-value': derived.doubled }, children);
}
export default Component19884;
