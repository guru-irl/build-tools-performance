import React from 'react';
const LABEL_20305 = 'component_20305';
export function Component20305({ value = 20305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20305, 'data-value': derived.doubled }, children);
}
export default Component20305;
