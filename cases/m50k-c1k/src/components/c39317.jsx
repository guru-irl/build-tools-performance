import React from 'react';
const LABEL_39317 = 'component_39317';
export function Component39317({ value = 39317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39317, 'data-value': derived.doubled }, children);
}
export default Component39317;
