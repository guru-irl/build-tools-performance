import React from 'react';
const LABEL_42327 = 'component_42327';
export function Component42327({ value = 42327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42327, 'data-value': derived.doubled }, children);
}
export default Component42327;
