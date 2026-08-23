import React from 'react';
const LABEL_40190 = 'component_40190';
export function Component40190({ value = 40190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40190, 'data-value': derived.doubled }, children);
}
export default Component40190;
