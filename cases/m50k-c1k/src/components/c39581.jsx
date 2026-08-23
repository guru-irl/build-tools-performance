import React from 'react';
const LABEL_39581 = 'component_39581';
export function Component39581({ value = 39581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39581, 'data-value': derived.doubled }, children);
}
export default Component39581;
