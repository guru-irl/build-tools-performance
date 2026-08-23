import React from 'react';
const LABEL_10660 = 'component_10660';
export function Component10660({ value = 10660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10660, 'data-value': derived.doubled }, children);
}
export default Component10660;
