import React from 'react';
const LABEL_34900 = 'component_34900';
export function Component34900({ value = 34900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34900, 'data-value': derived.doubled }, children);
}
export default Component34900;
