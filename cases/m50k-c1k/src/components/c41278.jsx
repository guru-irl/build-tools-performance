import React from 'react';
const LABEL_41278 = 'component_41278';
export function Component41278({ value = 41278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41278, 'data-value': derived.doubled }, children);
}
export default Component41278;
