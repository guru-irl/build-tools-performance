import React from 'react';
const LABEL_39230 = 'component_39230';
export function Component39230({ value = 39230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39230, 'data-value': derived.doubled }, children);
}
export default Component39230;
