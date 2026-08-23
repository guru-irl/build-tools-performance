import React from 'react';
const LABEL_4218 = 'component_4218';
export function Component4218({ value = 4218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4218, 'data-value': derived.doubled }, children);
}
export default Component4218;
