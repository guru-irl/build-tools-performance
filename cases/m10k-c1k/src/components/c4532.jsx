import React from 'react';
const LABEL_4532 = 'component_4532';
export function Component4532({ value = 4532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4532, 'data-value': derived.doubled }, children);
}
export default Component4532;
