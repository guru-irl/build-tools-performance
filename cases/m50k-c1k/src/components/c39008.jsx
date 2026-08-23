import React from 'react';
const LABEL_39008 = 'component_39008';
export function Component39008({ value = 39008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39008, 'data-value': derived.doubled }, children);
}
export default Component39008;
