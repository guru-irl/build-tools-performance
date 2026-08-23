import React from 'react';
const LABEL_41360 = 'component_41360';
export function Component41360({ value = 41360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41360, 'data-value': derived.doubled }, children);
}
export default Component41360;
