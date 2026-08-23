import React from 'react';
const LABEL_30226 = 'component_30226';
export function Component30226({ value = 30226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30226, 'data-value': derived.doubled }, children);
}
export default Component30226;
