import React from 'react';
const LABEL_46814 = 'component_46814';
export function Component46814({ value = 46814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46814, 'data-value': derived.doubled }, children);
}
export default Component46814;
