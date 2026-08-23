import React from 'react';
const LABEL_1814 = 'component_1814';
export function Component1814({ value = 1814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1814, 'data-value': derived.doubled }, children);
}
export default Component1814;
