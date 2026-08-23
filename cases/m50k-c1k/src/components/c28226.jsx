import React from 'react';
const LABEL_28226 = 'component_28226';
export function Component28226({ value = 28226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28226, 'data-value': derived.doubled }, children);
}
export default Component28226;
