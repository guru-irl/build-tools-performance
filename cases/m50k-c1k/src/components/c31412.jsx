import React from 'react';
const LABEL_31412 = 'component_31412';
export function Component31412({ value = 31412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31412, 'data-value': derived.doubled }, children);
}
export default Component31412;
