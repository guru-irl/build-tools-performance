import React from 'react';
const LABEL_13144 = 'component_13144';
export function Component13144({ value = 13144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13144, 'data-value': derived.doubled }, children);
}
export default Component13144;
