import React from 'react';
const LABEL_45814 = 'component_45814';
export function Component45814({ value = 45814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45814, 'data-value': derived.doubled }, children);
}
export default Component45814;
