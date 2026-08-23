import React from 'react';
const LABEL_4772 = 'component_4772';
export function Component4772({ value = 4772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4772, 'data-value': derived.doubled }, children);
}
export default Component4772;
