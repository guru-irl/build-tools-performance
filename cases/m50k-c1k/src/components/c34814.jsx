import React from 'react';
const LABEL_34814 = 'component_34814';
export function Component34814({ value = 34814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34814, 'data-value': derived.doubled }, children);
}
export default Component34814;
