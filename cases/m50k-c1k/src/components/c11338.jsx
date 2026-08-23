import React from 'react';
const LABEL_11338 = 'component_11338';
export function Component11338({ value = 11338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11338, 'data-value': derived.doubled }, children);
}
export default Component11338;
