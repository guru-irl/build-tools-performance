import React from 'react';
const LABEL_13730 = 'component_13730';
export function Component13730({ value = 13730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13730, 'data-value': derived.doubled }, children);
}
export default Component13730;
