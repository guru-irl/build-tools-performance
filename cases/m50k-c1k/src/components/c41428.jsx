import React from 'react';
const LABEL_41428 = 'component_41428';
export function Component41428({ value = 41428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41428, 'data-value': derived.doubled }, children);
}
export default Component41428;
