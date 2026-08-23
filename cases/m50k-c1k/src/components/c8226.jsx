import React from 'react';
const LABEL_8226 = 'component_8226';
export function Component8226({ value = 8226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8226, 'data-value': derived.doubled }, children);
}
export default Component8226;
