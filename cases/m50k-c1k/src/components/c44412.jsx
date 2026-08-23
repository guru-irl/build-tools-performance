import React from 'react';
const LABEL_44412 = 'component_44412';
export function Component44412({ value = 44412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44412, 'data-value': derived.doubled }, children);
}
export default Component44412;
