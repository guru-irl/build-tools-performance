import React from 'react';
const LABEL_20444 = 'component_20444';
export function Component20444({ value = 20444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20444, 'data-value': derived.doubled }, children);
}
export default Component20444;
