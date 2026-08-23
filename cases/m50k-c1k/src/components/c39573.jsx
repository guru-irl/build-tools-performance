import React from 'react';
const LABEL_39573 = 'component_39573';
export function Component39573({ value = 39573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39573, 'data-value': derived.doubled }, children);
}
export default Component39573;
