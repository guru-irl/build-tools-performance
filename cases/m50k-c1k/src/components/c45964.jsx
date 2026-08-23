import React from 'react';
const LABEL_45964 = 'component_45964';
export function Component45964({ value = 45964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45964, 'data-value': derived.doubled }, children);
}
export default Component45964;
