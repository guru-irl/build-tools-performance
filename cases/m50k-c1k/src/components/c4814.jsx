import React from 'react';
const LABEL_4814 = 'component_4814';
export function Component4814({ value = 4814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4814, 'data-value': derived.doubled }, children);
}
export default Component4814;
