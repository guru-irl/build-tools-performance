import React from 'react';
const LABEL_23814 = 'component_23814';
export function Component23814({ value = 23814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23814, 'data-value': derived.doubled }, children);
}
export default Component23814;
