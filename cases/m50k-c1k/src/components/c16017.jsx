import React from 'react';
const LABEL_16017 = 'component_16017';
export function Component16017({ value = 16017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16017, 'data-value': derived.doubled }, children);
}
export default Component16017;
