import React from 'react';
const LABEL_26352 = 'component_26352';
export function Component26352({ value = 26352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26352, 'data-value': derived.doubled }, children);
}
export default Component26352;
