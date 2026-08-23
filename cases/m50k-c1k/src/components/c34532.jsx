import React from 'react';
const LABEL_34532 = 'component_34532';
export function Component34532({ value = 34532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34532, 'data-value': derived.doubled }, children);
}
export default Component34532;
