import React from 'react';
const LABEL_13660 = 'component_13660';
export function Component13660({ value = 13660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13660, 'data-value': derived.doubled }, children);
}
export default Component13660;
