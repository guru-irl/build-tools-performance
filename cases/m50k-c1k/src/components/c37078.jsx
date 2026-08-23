import React from 'react';
const LABEL_37078 = 'component_37078';
export function Component37078({ value = 37078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37078, 'data-value': derived.doubled }, children);
}
export default Component37078;
