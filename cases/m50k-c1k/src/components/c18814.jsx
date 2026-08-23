import React from 'react';
const LABEL_18814 = 'component_18814';
export function Component18814({ value = 18814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18814, 'data-value': derived.doubled }, children);
}
export default Component18814;
