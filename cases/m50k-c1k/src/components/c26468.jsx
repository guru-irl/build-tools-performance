import React from 'react';
const LABEL_26468 = 'component_26468';
export function Component26468({ value = 26468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26468, 'data-value': derived.doubled }, children);
}
export default Component26468;
