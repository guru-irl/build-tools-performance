import React from 'react';
const LABEL_4479 = 'component_4479';
export function Component4479({ value = 4479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4479, 'data-value': derived.doubled }, children);
}
export default Component4479;
