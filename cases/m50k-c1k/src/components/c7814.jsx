import React from 'react';
const LABEL_7814 = 'component_7814';
export function Component7814({ value = 7814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7814, 'data-value': derived.doubled }, children);
}
export default Component7814;
