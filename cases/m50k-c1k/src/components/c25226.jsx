import React from 'react';
const LABEL_25226 = 'component_25226';
export function Component25226({ value = 25226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25226, 'data-value': derived.doubled }, children);
}
export default Component25226;
