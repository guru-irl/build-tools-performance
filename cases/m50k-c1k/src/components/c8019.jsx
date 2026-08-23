import React from 'react';
const LABEL_8019 = 'component_8019';
export function Component8019({ value = 8019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8019, 'data-value': derived.doubled }, children);
}
export default Component8019;
