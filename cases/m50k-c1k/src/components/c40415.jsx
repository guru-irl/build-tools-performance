import React from 'react';
const LABEL_40415 = 'component_40415';
export function Component40415({ value = 40415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40415, 'data-value': derived.doubled }, children);
}
export default Component40415;
