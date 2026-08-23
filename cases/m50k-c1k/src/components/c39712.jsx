import React from 'react';
const LABEL_39712 = 'component_39712';
export function Component39712({ value = 39712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39712, 'data-value': derived.doubled }, children);
}
export default Component39712;
