import React from 'react';
const LABEL_44067 = 'component_44067';
export function Component44067({ value = 44067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44067, 'data-value': derived.doubled }, children);
}
export default Component44067;
