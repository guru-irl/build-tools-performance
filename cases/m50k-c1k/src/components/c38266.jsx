import React from 'react';
const LABEL_38266 = 'component_38266';
export function Component38266({ value = 38266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38266, 'data-value': derived.doubled }, children);
}
export default Component38266;
