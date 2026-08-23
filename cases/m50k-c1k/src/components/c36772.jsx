import React from 'react';
const LABEL_36772 = 'component_36772';
export function Component36772({ value = 36772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36772, 'data-value': derived.doubled }, children);
}
export default Component36772;
