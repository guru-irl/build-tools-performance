import React from 'react';
const LABEL_46450 = 'component_46450';
export function Component46450({ value = 46450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46450, 'data-value': derived.doubled }, children);
}
export default Component46450;
