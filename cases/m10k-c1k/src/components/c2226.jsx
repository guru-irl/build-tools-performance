import React from 'react';
const LABEL_2226 = 'component_2226';
export function Component2226({ value = 2226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2226, 'data-value': derived.doubled }, children);
}
export default Component2226;
