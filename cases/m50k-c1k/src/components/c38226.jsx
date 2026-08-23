import React from 'react';
const LABEL_38226 = 'component_38226';
export function Component38226({ value = 38226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38226, 'data-value': derived.doubled }, children);
}
export default Component38226;
