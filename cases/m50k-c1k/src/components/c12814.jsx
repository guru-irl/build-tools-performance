import React from 'react';
const LABEL_12814 = 'component_12814';
export function Component12814({ value = 12814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12814, 'data-value': derived.doubled }, children);
}
export default Component12814;
