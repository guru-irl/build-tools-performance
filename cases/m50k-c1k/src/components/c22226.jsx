import React from 'react';
const LABEL_22226 = 'component_22226';
export function Component22226({ value = 22226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22226, 'data-value': derived.doubled }, children);
}
export default Component22226;
