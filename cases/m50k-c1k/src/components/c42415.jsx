import React from 'react';
const LABEL_42415 = 'component_42415';
export function Component42415({ value = 42415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42415, 'data-value': derived.doubled }, children);
}
export default Component42415;
