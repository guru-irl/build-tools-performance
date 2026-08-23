import React from 'react';
const LABEL_39259 = 'component_39259';
export function Component39259({ value = 39259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39259, 'data-value': derived.doubled }, children);
}
export default Component39259;
