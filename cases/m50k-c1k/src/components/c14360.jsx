import React from 'react';
const LABEL_14360 = 'component_14360';
export function Component14360({ value = 14360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14360, 'data-value': derived.doubled }, children);
}
export default Component14360;
