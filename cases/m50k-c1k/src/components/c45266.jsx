import React from 'react';
const LABEL_45266 = 'component_45266';
export function Component45266({ value = 45266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45266, 'data-value': derived.doubled }, children);
}
export default Component45266;
