import React from 'react';
const LABEL_19049 = 'component_19049';
export function Component19049({ value = 19049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19049, 'data-value': derived.doubled }, children);
}
export default Component19049;
