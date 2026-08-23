import React from 'react';
const LABEL_8828 = 'component_8828';
export function Component8828({ value = 8828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8828, 'data-value': derived.doubled }, children);
}
export default Component8828;
