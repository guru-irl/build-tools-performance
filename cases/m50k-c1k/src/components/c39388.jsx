import React from 'react';
const LABEL_39388 = 'component_39388';
export function Component39388({ value = 39388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39388, 'data-value': derived.doubled }, children);
}
export default Component39388;
