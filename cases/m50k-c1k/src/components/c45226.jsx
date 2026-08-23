import React from 'react';
const LABEL_45226 = 'component_45226';
export function Component45226({ value = 45226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45226, 'data-value': derived.doubled }, children);
}
export default Component45226;
