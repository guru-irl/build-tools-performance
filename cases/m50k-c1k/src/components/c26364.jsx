import React from 'react';
const LABEL_26364 = 'component_26364';
export function Component26364({ value = 26364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26364, 'data-value': derived.doubled }, children);
}
export default Component26364;
