import React from 'react';
const LABEL_31814 = 'component_31814';
export function Component31814({ value = 31814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31814, 'data-value': derived.doubled }, children);
}
export default Component31814;
