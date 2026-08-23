import React from 'react';
const LABEL_7730 = 'component_7730';
export function Component7730({ value = 7730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7730, 'data-value': derived.doubled }, children);
}
export default Component7730;
