import React from 'react';
const LABEL_38564 = 'component_38564';
export function Component38564({ value = 38564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38564, 'data-value': derived.doubled }, children);
}
export default Component38564;
