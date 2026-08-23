import React from 'react';
const LABEL_39556 = 'component_39556';
export function Component39556({ value = 39556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39556, 'data-value': derived.doubled }, children);
}
export default Component39556;
