import React from 'react';
const LABEL_16660 = 'component_16660';
export function Component16660({ value = 16660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16660, 'data-value': derived.doubled }, children);
}
export default Component16660;
