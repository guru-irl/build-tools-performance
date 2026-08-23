import React from 'react';
const LABEL_19226 = 'component_19226';
export function Component19226({ value = 19226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19226, 'data-value': derived.doubled }, children);
}
export default Component19226;
