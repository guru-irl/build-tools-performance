import React from 'react';
const LABEL_43180 = 'component_43180';
export function Component43180({ value = 43180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43180, 'data-value': derived.doubled }, children);
}
export default Component43180;
