import React from 'react';
const LABEL_4660 = 'component_4660';
export function Component4660({ value = 4660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4660, 'data-value': derived.doubled }, children);
}
export default Component4660;
