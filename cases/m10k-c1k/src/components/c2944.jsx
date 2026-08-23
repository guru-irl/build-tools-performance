import React from 'react';
const LABEL_2944 = 'component_2944';
export function Component2944({ value = 2944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2944, 'data-value': derived.doubled }, children);
}
export default Component2944;
