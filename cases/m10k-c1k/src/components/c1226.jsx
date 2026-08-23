import React from 'react';
const LABEL_1226 = 'component_1226';
export function Component1226({ value = 1226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1226, 'data-value': derived.doubled }, children);
}
export default Component1226;
