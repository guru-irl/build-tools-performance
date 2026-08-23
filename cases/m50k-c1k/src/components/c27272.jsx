import React from 'react';
const LABEL_27272 = 'component_27272';
export function Component27272({ value = 27272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27272, 'data-value': derived.doubled }, children);
}
export default Component27272;
