import React from 'react';
const LABEL_4511 = 'component_4511';
export function Component4511({ value = 4511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4511, 'data-value': derived.doubled }, children);
}
export default Component4511;
