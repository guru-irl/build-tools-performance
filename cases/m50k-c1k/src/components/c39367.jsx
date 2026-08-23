import React from 'react';
const LABEL_39367 = 'component_39367';
export function Component39367({ value = 39367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39367, 'data-value': derived.doubled }, children);
}
export default Component39367;
