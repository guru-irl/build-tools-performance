import React from 'react';
const LABEL_18352 = 'component_18352';
export function Component18352({ value = 18352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18352, 'data-value': derived.doubled }, children);
}
export default Component18352;
