import React from 'react';
const LABEL_42226 = 'component_42226';
export function Component42226({ value = 42226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42226, 'data-value': derived.doubled }, children);
}
export default Component42226;
