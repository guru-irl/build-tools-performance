import React from 'react';
const LABEL_8144 = 'component_8144';
export function Component8144({ value = 8144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8144, 'data-value': derived.doubled }, children);
}
export default Component8144;
