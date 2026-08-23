import React from 'react';
const LABEL_42556 = 'component_42556';
export function Component42556({ value = 42556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42556, 'data-value': derived.doubled }, children);
}
export default Component42556;
