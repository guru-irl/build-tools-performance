import React from 'react';
const LABEL_39226 = 'component_39226';
export function Component39226({ value = 39226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39226, 'data-value': derived.doubled }, children);
}
export default Component39226;
