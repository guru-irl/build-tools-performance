import React from 'react';
const LABEL_34049 = 'component_34049';
export function Component34049({ value = 34049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34049, 'data-value': derived.doubled }, children);
}
export default Component34049;
