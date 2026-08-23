import React from 'react';
const LABEL_41406 = 'component_41406';
export function Component41406({ value = 41406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41406, 'data-value': derived.doubled }, children);
}
export default Component41406;
