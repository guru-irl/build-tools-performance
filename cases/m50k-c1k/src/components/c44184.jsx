import React from 'react';
const LABEL_44184 = 'component_44184';
export function Component44184({ value = 44184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44184, 'data-value': derived.doubled }, children);
}
export default Component44184;
