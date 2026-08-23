import React from 'react';
const LABEL_33226 = 'component_33226';
export function Component33226({ value = 33226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33226, 'data-value': derived.doubled }, children);
}
export default Component33226;
