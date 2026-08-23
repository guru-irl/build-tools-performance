import React from 'react';
const LABEL_45538 = 'component_45538';
export function Component45538({ value = 45538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45538, 'data-value': derived.doubled }, children);
}
export default Component45538;
