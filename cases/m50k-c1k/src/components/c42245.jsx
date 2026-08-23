import React from 'react';
const LABEL_42245 = 'component_42245';
export function Component42245({ value = 42245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42245, 'data-value': derived.doubled }, children);
}
export default Component42245;
