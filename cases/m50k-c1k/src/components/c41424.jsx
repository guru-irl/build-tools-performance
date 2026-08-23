import React from 'react';
const LABEL_41424 = 'component_41424';
export function Component41424({ value = 41424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41424, 'data-value': derived.doubled }, children);
}
export default Component41424;
