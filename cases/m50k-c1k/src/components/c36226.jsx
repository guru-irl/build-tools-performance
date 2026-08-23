import React from 'react';
const LABEL_36226 = 'component_36226';
export function Component36226({ value = 36226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36226, 'data-value': derived.doubled }, children);
}
export default Component36226;
