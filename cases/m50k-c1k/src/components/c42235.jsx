import React from 'react';
const LABEL_42235 = 'component_42235';
export function Component42235({ value = 42235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42235, 'data-value': derived.doubled }, children);
}
export default Component42235;
