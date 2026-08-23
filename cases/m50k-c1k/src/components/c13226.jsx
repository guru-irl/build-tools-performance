import React from 'react';
const LABEL_13226 = 'component_13226';
export function Component13226({ value = 13226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13226, 'data-value': derived.doubled }, children);
}
export default Component13226;
