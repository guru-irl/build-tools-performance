import React from 'react';
const LABEL_43226 = 'component_43226';
export function Component43226({ value = 43226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43226, 'data-value': derived.doubled }, children);
}
export default Component43226;
