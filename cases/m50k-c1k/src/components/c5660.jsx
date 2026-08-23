import React from 'react';
const LABEL_5660 = 'component_5660';
export function Component5660({ value = 5660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5660, 'data-value': derived.doubled }, children);
}
export default Component5660;
