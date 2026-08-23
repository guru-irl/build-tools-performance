import React from 'react';
const LABEL_39514 = 'component_39514';
export function Component39514({ value = 39514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39514, 'data-value': derived.doubled }, children);
}
export default Component39514;
