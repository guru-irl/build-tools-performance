import React from 'react';
const LABEL_42412 = 'component_42412';
export function Component42412({ value = 42412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42412, 'data-value': derived.doubled }, children);
}
export default Component42412;
