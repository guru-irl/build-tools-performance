import React from 'react';
const LABEL_39066 = 'component_39066';
export function Component39066({ value = 39066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39066, 'data-value': derived.doubled }, children);
}
export default Component39066;
