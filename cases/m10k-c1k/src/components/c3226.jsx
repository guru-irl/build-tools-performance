import React from 'react';
const LABEL_3226 = 'component_3226';
export function Component3226({ value = 3226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3226, 'data-value': derived.doubled }, children);
}
export default Component3226;
