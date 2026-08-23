import React from 'react';
const LABEL_10417 = 'component_10417';
export function Component10417({ value = 10417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10417, 'data-value': derived.doubled }, children);
}
export default Component10417;
