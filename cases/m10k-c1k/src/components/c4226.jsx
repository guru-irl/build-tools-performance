import React from 'react';
const LABEL_4226 = 'component_4226';
export function Component4226({ value = 4226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4226, 'data-value': derived.doubled }, children);
}
export default Component4226;
