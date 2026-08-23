import React from 'react';
const LABEL_35450 = 'component_35450';
export function Component35450({ value = 35450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35450, 'data-value': derived.doubled }, children);
}
export default Component35450;
