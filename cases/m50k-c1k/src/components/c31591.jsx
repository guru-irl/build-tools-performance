import React from 'react';
const LABEL_31591 = 'component_31591';
export function Component31591({ value = 31591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31591, 'data-value': derived.doubled }, children);
}
export default Component31591;
