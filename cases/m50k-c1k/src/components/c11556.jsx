import React from 'react';
const LABEL_11556 = 'component_11556';
export function Component11556({ value = 11556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11556, 'data-value': derived.doubled }, children);
}
export default Component11556;
