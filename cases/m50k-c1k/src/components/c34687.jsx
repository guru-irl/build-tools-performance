import React from 'react';
const LABEL_34687 = 'component_34687';
export function Component34687({ value = 34687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34687, 'data-value': derived.doubled }, children);
}
export default Component34687;
