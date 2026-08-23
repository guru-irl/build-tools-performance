import React from 'react';
const LABEL_34226 = 'component_34226';
export function Component34226({ value = 34226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34226, 'data-value': derived.doubled }, children);
}
export default Component34226;
