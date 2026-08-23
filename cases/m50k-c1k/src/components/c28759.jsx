import React from 'react';
const LABEL_28759 = 'component_28759';
export function Component28759({ value = 28759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28759, 'data-value': derived.doubled }, children);
}
export default Component28759;
