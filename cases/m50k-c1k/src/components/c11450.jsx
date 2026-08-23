import React from 'react';
const LABEL_11450 = 'component_11450';
export function Component11450({ value = 11450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11450, 'data-value': derived.doubled }, children);
}
export default Component11450;
