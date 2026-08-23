import React from 'react';
const LABEL_32180 = 'component_32180';
export function Component32180({ value = 32180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32180, 'data-value': derived.doubled }, children);
}
export default Component32180;
