import React from 'react';
const LABEL_40121 = 'component_40121';
export function Component40121({ value = 40121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40121, 'data-value': derived.doubled }, children);
}
export default Component40121;
