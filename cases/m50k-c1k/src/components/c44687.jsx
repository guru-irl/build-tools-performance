import React from 'react';
const LABEL_44687 = 'component_44687';
export function Component44687({ value = 44687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44687, 'data-value': derived.doubled }, children);
}
export default Component44687;
