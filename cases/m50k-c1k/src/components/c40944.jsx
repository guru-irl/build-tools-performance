import React from 'react';
const LABEL_40944 = 'component_40944';
export function Component40944({ value = 40944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40944, 'data-value': derived.doubled }, children);
}
export default Component40944;
