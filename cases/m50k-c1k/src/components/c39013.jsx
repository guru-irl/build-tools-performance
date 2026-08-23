import React from 'react';
const LABEL_39013 = 'component_39013';
export function Component39013({ value = 39013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39013, 'data-value': derived.doubled }, children);
}
export default Component39013;
