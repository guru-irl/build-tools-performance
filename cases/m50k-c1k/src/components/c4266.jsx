import React from 'react';
const LABEL_4266 = 'component_4266';
export function Component4266({ value = 4266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4266, 'data-value': derived.doubled }, children);
}
export default Component4266;
