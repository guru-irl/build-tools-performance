import React from 'react';
const LABEL_16226 = 'component_16226';
export function Component16226({ value = 16226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16226, 'data-value': derived.doubled }, children);
}
export default Component16226;
