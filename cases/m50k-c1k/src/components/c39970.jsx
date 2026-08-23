import React from 'react';
const LABEL_39970 = 'component_39970';
export function Component39970({ value = 39970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39970, 'data-value': derived.doubled }, children);
}
export default Component39970;
