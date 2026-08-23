import React from 'react';
const LABEL_45006 = 'component_45006';
export function Component45006({ value = 45006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45006, 'data-value': derived.doubled }, children);
}
export default Component45006;
