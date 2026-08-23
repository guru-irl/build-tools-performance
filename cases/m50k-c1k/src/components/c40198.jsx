import React from 'react';
const LABEL_40198 = 'component_40198';
export function Component40198({ value = 40198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40198, 'data-value': derived.doubled }, children);
}
export default Component40198;
