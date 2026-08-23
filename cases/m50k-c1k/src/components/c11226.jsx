import React from 'react';
const LABEL_11226 = 'component_11226';
export function Component11226({ value = 11226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11226, 'data-value': derived.doubled }, children);
}
export default Component11226;
