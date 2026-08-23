import React from 'react';
const LABEL_42278 = 'component_42278';
export function Component42278({ value = 42278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42278, 'data-value': derived.doubled }, children);
}
export default Component42278;
