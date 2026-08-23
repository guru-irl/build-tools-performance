import React from 'react';
const LABEL_30563 = 'component_30563';
export function Component30563({ value = 30563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30563, 'data-value': derived.doubled }, children);
}
export default Component30563;
