import React from 'react';
const LABEL_39195 = 'component_39195';
export function Component39195({ value = 39195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39195, 'data-value': derived.doubled }, children);
}
export default Component39195;
