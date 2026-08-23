import React from 'react';
const LABEL_39393 = 'component_39393';
export function Component39393({ value = 39393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39393, 'data-value': derived.doubled }, children);
}
export default Component39393;
