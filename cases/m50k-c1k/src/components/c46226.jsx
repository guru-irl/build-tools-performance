import React from 'react';
const LABEL_46226 = 'component_46226';
export function Component46226({ value = 46226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46226, 'data-value': derived.doubled }, children);
}
export default Component46226;
