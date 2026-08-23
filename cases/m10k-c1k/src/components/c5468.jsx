import React from 'react';
const LABEL_5468 = 'component_5468';
export function Component5468({ value = 5468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5468, 'data-value': derived.doubled }, children);
}
export default Component5468;
