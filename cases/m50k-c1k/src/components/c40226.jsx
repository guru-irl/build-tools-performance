import React from 'react';
const LABEL_40226 = 'component_40226';
export function Component40226({ value = 40226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40226, 'data-value': derived.doubled }, children);
}
export default Component40226;
