import React from 'react';
const LABEL_39410 = 'component_39410';
export function Component39410({ value = 39410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39410, 'data-value': derived.doubled }, children);
}
export default Component39410;
