import React from 'react';
const LABEL_39846 = 'component_39846';
export function Component39846({ value = 39846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39846, 'data-value': derived.doubled }, children);
}
export default Component39846;
