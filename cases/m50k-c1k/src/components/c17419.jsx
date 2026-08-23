import React from 'react';
const LABEL_17419 = 'component_17419';
export function Component17419({ value = 17419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17419, 'data-value': derived.doubled }, children);
}
export default Component17419;
