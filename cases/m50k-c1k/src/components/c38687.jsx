import React from 'react';
const LABEL_38687 = 'component_38687';
export function Component38687({ value = 38687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38687, 'data-value': derived.doubled }, children);
}
export default Component38687;
