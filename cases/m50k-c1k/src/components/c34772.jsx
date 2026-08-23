import React from 'react';
const LABEL_34772 = 'component_34772';
export function Component34772({ value = 34772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34772, 'data-value': derived.doubled }, children);
}
export default Component34772;
