import React from 'react';
const LABEL_34925 = 'component_34925';
export function Component34925({ value = 34925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34925, 'data-value': derived.doubled }, children);
}
export default Component34925;
