import React from 'react';
const LABEL_4940 = 'component_4940';
export function Component4940({ value = 4940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4940, 'data-value': derived.doubled }, children);
}
export default Component4940;
