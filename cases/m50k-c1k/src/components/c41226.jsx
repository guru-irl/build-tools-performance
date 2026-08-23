import React from 'react';
const LABEL_41226 = 'component_41226';
export function Component41226({ value = 41226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41226, 'data-value': derived.doubled }, children);
}
export default Component41226;
