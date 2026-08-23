import React from 'react';
const LABEL_34412 = 'component_34412';
export function Component34412({ value = 34412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34412, 'data-value': derived.doubled }, children);
}
export default Component34412;
