import React from 'react';
const LABEL_25392 = 'component_25392';
export function Component25392({ value = 25392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25392, 'data-value': derived.doubled }, children);
}
export default Component25392;
