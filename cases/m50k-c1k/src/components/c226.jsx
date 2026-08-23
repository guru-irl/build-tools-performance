import React from 'react';
const LABEL_226 = 'component_226';
export function Component226({ value = 226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_226, 'data-value': derived.doubled }, children);
}
export default Component226;
