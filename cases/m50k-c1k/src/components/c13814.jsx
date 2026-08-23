import React from 'react';
const LABEL_13814 = 'component_13814';
export function Component13814({ value = 13814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13814, 'data-value': derived.doubled }, children);
}
export default Component13814;
