import React from 'react';
const LABEL_36444 = 'component_36444';
export function Component36444({ value = 36444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36444, 'data-value': derived.doubled }, children);
}
export default Component36444;
