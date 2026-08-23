import React from 'react';
const LABEL_39403 = 'component_39403';
export function Component39403({ value = 39403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39403, 'data-value': derived.doubled }, children);
}
export default Component39403;
