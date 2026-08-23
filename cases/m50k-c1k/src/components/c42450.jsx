import React from 'react';
const LABEL_42450 = 'component_42450';
export function Component42450({ value = 42450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42450, 'data-value': derived.doubled }, children);
}
export default Component42450;
