import React from 'react';
const LABEL_41412 = 'component_41412';
export function Component41412({ value = 41412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41412, 'data-value': derived.doubled }, children);
}
export default Component41412;
