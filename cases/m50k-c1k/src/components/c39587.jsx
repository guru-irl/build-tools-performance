import React from 'react';
const LABEL_39587 = 'component_39587';
export function Component39587({ value = 39587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39587, 'data-value': derived.doubled }, children);
}
export default Component39587;
