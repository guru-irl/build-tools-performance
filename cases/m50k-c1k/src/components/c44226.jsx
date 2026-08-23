import React from 'react';
const LABEL_44226 = 'component_44226';
export function Component44226({ value = 44226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44226, 'data-value': derived.doubled }, children);
}
export default Component44226;
